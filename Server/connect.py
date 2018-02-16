import couchdb

couch = couchdb.Server()

couch = couchdb.Server('http://localhost:5984')

# Use existing datbase
dbname = "people"

if dbname in couch:
    db = couch[dbname]
else:
    db = couch.create(dbname)

db = couch['people']
doc = {'person': 'Riona'}
doc1 = {'person': 'Ervin'}

db.save(doc)
db.save(doc1)