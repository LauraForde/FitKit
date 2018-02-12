import couchdb

couch = couchdb.Server('http://localhost:5984')

# Use existing datbase
db = couch.create('people')

doc = {'person': 'Riona'}
doc1 = {'person': 'Ervin'}

db.save(doc)
db.save(doc1)