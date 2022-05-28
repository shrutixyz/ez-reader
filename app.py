

from flask import Flask, render_template, request


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
        print("lol")
        file = request.files.get('sent_file')
        print("lmao")
        file.save('static/lmao.pdf')
    return render_template('pdf.html', name ='static/lmao.pdf' )



if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run()

