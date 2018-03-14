# Adpated from http://flask.pocoo.org/
import flask as fl
import couchdb
import json
#import connect
from flask import Flask, render_template
from flask import request
from flask_cors import CORS, cross_origin

app = fl.Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins":"*"}})

couch = couchdb.Server('http://localhost:5984')
db = couch['people']

@app.route('/')
def route():
    return render_template('home.html')
	

@app.route("/people", methods = ['GET'])
def hello():
    docs = []
    
    rows = db.view('_all_docs', include_docs = True)
    docs = [row.doc for row in rows]
    # post = json.dumps((docs))
    # poster = json.loads(post)
    # poster.reverse()
    

    return json.dumps(docs)
if __name__ == "__main__":
    app.run(debug = False, host="0.0.0.0")