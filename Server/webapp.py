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
    return "Welcome to FitKit"
	

# With help from - http://flask.pocoo.org/docs/0.12/api/
@app.route("/people", methods = ['GET'])
def hello():
    docs = []
    
    rows = db.view('_all_docs', include_docs = True)
    docs = [row.doc for row in rows]
    return json.dumps(docs)

if __name__ == "__main__":
    app.run(debug = False, host="0.0.0.0")