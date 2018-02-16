# Adpated from http://flask.pocoo.org/
import flask as fl
import couchdb
import json
#import connect
from flask import Flask, render_template
from flask import request

app = fl.Flask(__name__)

couch = couchdb.Server('http://localhost:5984')
db = couch['people']

@app.route("/")
def route():
    return render_template("index.html")
	

@app.route("/home")
def hello():

    rows = db.view('_all_docs', keys=['person'], include_docs = True)
    docs = [row.doc for row in rows]
    post = json.dumps((docs))
    poster = json.loads(post)
    poster.reverse()
    return render_template("home.html", ppl = poster)

if __name__ == "__main__":
    app.run(debug = False)