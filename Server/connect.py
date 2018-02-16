import couchdb

couch = couchdb.Server('http://localhost:5984')

# Use existing datbase
dbname = "people"

if dbname in couch:
    db = couch[dbname]
else:
    db = couch.create(dbname)

doc = {'person': 'Riona'}

db = couch['people']
doc = {'person': 'Ervin'}

for item in db.view('designDoc/new-view'):
    print(item.key, item.id, item.value)

db.save(doc)