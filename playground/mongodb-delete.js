const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    const db = client.db('TodoApp')
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //deleteMany
        db.collection('Todos').deleteMany({text: 'Eat dinner'}).then(result => {
            console.log(result.result);
        });
    //deleteOne
        db.collection('Todos').deleteOne({text: 'Walk the dog'}).then(result => {
            console.log(result.result);
        }, err => {
            console.log('deletion failed');
        });
    //findOneAndDelete()
    db.collection('Todos').findOneAndDelete({text: 'Task'}).then(res => {
        console.log(res);
    }) 

    //challenge
    db.collection('Users').deleteMany({name: 'Meliodas'}).then(res => {
        console.log(res.result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5cfe3fd21b530d1ca8a01b7f")}).then(res => {
        console.log(res);
    })
})