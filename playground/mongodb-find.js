const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').find({
        _id: new ObjectID('5cfdcf59ab3b97161e5b62ce')
    }).toArray().then(docs =>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, err => {console.log('Unable to fetch todos', err)});

    db.collection('Todos').find().count().then(count =>{
        console.log(`Todos count : ${count}`);
    }, err => {console.log('Unable to count todos',err)})
    // client.close();
 
    db.collection('Users').find({name: 'Maruga'}).toArray().then(docs => {
        console.log(docs);
    }, err => {
        console.log(err);
    })
});

