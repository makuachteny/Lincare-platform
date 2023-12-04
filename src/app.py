from flask import Flask, render_template, request, session, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
 @app.route('/login', methods=['GET', 'POST'])
def login():
    msg=''
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

    cursor.execute

