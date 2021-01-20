
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dbName = 'group31db'
const conxnURL = 'mongodb://127.0.0.1:27017'
const Oid =  mongodb.ObjectID

module.exports = {
    MongoClient:MongoClient,
    dbName:dbName,
    conxnURL:conxnURL,
    Oid:Oid
}