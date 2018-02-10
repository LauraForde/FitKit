# Adpated from http://flask.pocoo.org/
import flask as fl
app = fl.Flask(__name__)

@app.route("/")
def hello():
    return "Hello World Brian!"

app.run(debug = False, host="0.0.0.0")