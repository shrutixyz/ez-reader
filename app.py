
from flask import Flask, render_template, request
from summarizer import generate_summary

app = Flask(__name__)



@app.route('/')
def home():
    return render_template('index.html')

@app.route('/pdf')
def pdf():
    return render_template('pdf.html')    

@app.route('/submit', methods=['GET', 'POST'])

def submit():
    if request.method == 'POST':

        uploaded_file = request.files['file']
        if uploaded_file.filename != '':
            uploaded_file.save(f'static/{uploaded_file.filename}')
    return render_template('pdf.html', name =f'static/{uploaded_file.filename}' )


@app.route('/summary', methods=['GET', 'POST'])
def summary():
    if request.method == 'POST':
        print("lol")
        text = request.form.get('text')
        print(text)
        count=0
        for i in text:
            if i=='.':
                count+=1
        hehe = int(count/4)
        if hehe<2:
            hehe=2
        x = generate_summary(hehe, text)
        
        print(x)
        # print(text)
    return render_template('summary.html', name =x )



if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()