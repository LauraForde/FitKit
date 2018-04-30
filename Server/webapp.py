# Adpated from http://flask.pocoo.org/
import flask as fl
import couchdb
import json
from flask import Flask, render_template
from flask import request, json, jsonify
from flask_cors import CORS, cross_origin

app = fl.Flask(__name__)

cors = CORS(app, resources={r"/*": {"origins":"*"}})

# Connecting to couch server
couch = couchdb.Server('http://localhost:5984')

# Connecting to two different databases
db = couch['people']
gymEquip = couch['equipment']

# Simple route
@app.route('/')
def route():
    return "Welcome to FitKit"

# Login route
@app.route("/login", methods = ['GET'])
def login():

    username = request.json["username"]
    password = request.json["password"]
    print(type(request.json))
    if username in db:
        print ("USERNAME EXISTS")
    else:
        print("NO")

# Register new user  
@app.route("/reg", methods= ['GET', 'POST'])
def reg_person() :

    try:
        firstname = request.json["firstname"]
        surname = request.json["surname"]
        email = request.json["email"]
        username = request.json["username"]
        password = request.json["password"]
        gender = request.json["gender"]
        dob = request.json["dob"]
        bio = request.json["bio"]

        print (type(request.json))

        doc = {
            'firstname': firstname,
            'surname': surname,
            'email': email,
            'username': username,
            'password': password,
            'gender': gender,
            'dob': dob,
            'bio': bio
        }
        db.save(doc)
    except: 
        print ("Unexpected error")
    

    return json.dumps({"message": "succesfull"}),200, {'Content-Type', 'application/json'}

# With help from - http://flask.pocoo.org/docs/0.12/api/
# Showing all people
@app.route("/people", methods = ['GET'])
def people():
    docs = []
    rows = db.view('_all_docs', include_docs = True)
    docs = [row.doc for row in rows]
    return json.dumps(docs)

# Showing items in equipment database
@app.route("/shop", methods = ['GET'])
def shop():
    docsEquip = []
    rows = gymEquip.view('_all_docs', include_docs = True)
    docsEquip = [row.doc for row in rows]
    return json.dumps(docsEquip)

# Route for adding to the equipment db
@app.route("/newPost", methods= ['GET', 'POST'])
def new_post():
    
    try:
        shopID = request.json["shopID"]
        prodName = request.json["prodName"]
        price = request.json["price"]
        des = request.json["des"]
        sellName = request.json["sellName"]
        num = request.json["num"]

        print (type(request.json))

        doc = {
            'shopID': shopID,
            'prodName': prodName,
            'price': price,
            'des': des,
            'sellName': sellName,
            'num': num
        }
        gymEquip.save(doc)
    except: 
        print ("Unexpected error")

        
    return json.dumps({"message": "successfull"}),200, {'Content-Type', 'application/json'}


# Attempt at deleting post
@app.route("/deletePost", methods = ['GET', 'POST'])
def delete_post():
    shopID = request.json["shopID"]

    gymEquip.delete(shopID)
    return json.dumps({"message": "successful"}), 200, {'Content-Type', 'application/json'}

# Attempt at updating
@app.route("/update", methods = ['GET', 'POST'])
def update(self, id, json):
    doc = self.db.get(id)
    doc["name"] = json["name"]
    doc = self.db.save(doc)

# Attempt at deleting person
@app.route("/deletePerson", methods = ['GET', 'POST', 'DELETE'])
def delete_person():

    id = request.json['id']
    if id in db:
        to_delete = db[id]
        db.delete(to_delete)
    db.update(docs)
    return docs

if __name__ == "__main__":
    app.run(debug = False, host="0.0.0.0")