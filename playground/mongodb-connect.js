const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Task',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    
    db.collection('Users').insertOne({
        name: 'Meliodas',
        age: 3020,
        location: 'Britannia'
    }, (err, result) => {
        if(err){
            return console.log('Demons won, data not inserted');
        }
        console.log('Defeated the Ten Commandments!');
    })
    client.close();
});

