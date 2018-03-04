import couchdb

couch = couchdb.Server()

couch = couchdb.Server('http://localhost:5984')

# Use existing datbase
dbname = "login"

if dbname in couch:
    db = couch[dbname]
else:
    db = couch.create(dbname)

db = couch['login']
doc = {'name': 'Laura', 'password' : '1234'}

db.save(doc)