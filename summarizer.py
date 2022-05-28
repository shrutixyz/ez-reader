# import spacy
from spacy.lang.en.stop_words import STOP_WORDS
from string import punctuation
import string
from spacy.lang.en.stop_words import STOP_WORDS
from spacy.lang.en import English
from heapq import nlargest
punctuations = string.punctuation
from spacy.language import Language
nlp = English()
nlp.add_pipe('sentencizer') # updated
parser = English()


def pre_process(document):
    clean_tokens = [ token.lemma_.lower().strip() for token in document ]
    clean_tokens = [ token for token in clean_tokens if token not in STOP_WORDS and token not in punctuations ]
    tokens = [token.text for token in document]
    lower_case_tokens = list(map(str.lower, tokens))
    
    return lower_case_tokens


def generate_numbers_vector(tokens):
    frequency = [tokens.count(token) for token in tokens]
    token_dict = dict(list(zip(tokens,frequency)))
    maximum_frequency=sorted(token_dict.values())[-1]
    normalised_dict = {token_key:token_dict[token_key]/maximum_frequency for token_key in token_dict.keys()}
    return normalised_dict


def sentences_importance(text, normalised_dict):
    importance ={}
    for sentence in nlp(text).sents:
        for token in sentence:
            target_token = token.text.lower()
            if target_token in normalised_dict.keys():
                if sentence in importance.keys():
                    importance[sentence]+=normalised_dict[target_token]
                else:
                    importance[sentence]=normalised_dict[target_token]
    return importance



def generate_summary(rank, text):
    target_document = parser(text)
    importance = sentences_importance(text, generate_numbers_vector(pre_process(target_document)))
    summary = nlargest(rank, importance, key=importance.get)
    print(summary)
    return summary


text="The binary number system was refined by Gottfried Wilhelm Leibniz (published in 1705) and he also established that by using the binary system, the principles of arithmetic and logic could be joined. Digital logic as we know it was the brain-child of George Boole in the mid 19th century. In an 1886 letter, Charles Sanders Peirce described how logical operations could be carried out by electrical switching circuits.[2] Eventually, vacuum tubes replaced relays for logic operations. Lee De Forest's modification of the Fleming valve in 1907 could be used as an AND gate. Ludwig Wittgenstein introduced a version of the 16-row truth table as proposition 5.101 of Tractatus Logico-Philosophicus (1921). Walther Bothe, inventor of the coincidence circuit, shared the 1954 Nobel Prize in physics, for creating the first modern electronic AND gate in 1924. Mechanical analog computers started appearing in the first century and were later used in the medieval era for astronomical calculations. In World War II, mechanical analog computers were used for specialized military applications such as calculating torpedo aiming. During this time the first electronic digital computers were developed, with the term digital being proposed by George Stibitz in 1942. Originally they were the size of a large room, consuming as much power as several hundred modern PCs.[3] The Z3 was an electromechanical computer designed by Konrad Zuse. Finished in 1941, it was the world's first working programmable, fully automatic digital computer.[4] Its operation was facilitated by the invention of the vacuum tube in 1904 by John Ambrose Fleming."

count = 0

for i in text:
    if i=='.':
        count+=1


num_sentences_to_generate = int(count/4)
if num_sentences_to_generate<2:
    num_sentences_to_generate = 2
print(f'lines: {num_sentences_to_generate}')
# generate_summary(num_sentences_to_generate, text)