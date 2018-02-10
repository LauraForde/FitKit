import couchdb
couch = couchdb.Server('http://localhost:5984')

''' Create this database
db = couch.create('test')

doc = {
    'id':8234552,
    'content':{
        'person' : 'Laura'
    }
}

db.save(doc) '''

# Use existing datbase
db = couch['test']

doc = {
    'id':2458621596,
    'content':{
        'person' : 'Riona',
        'email' : 'nkalndalofd'
    }
}

db.save(doc)