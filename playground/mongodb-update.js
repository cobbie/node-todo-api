const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    const db = client.db('TodoApp')
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5cfe79db0374a7d30022ed55")
    // }, {
    //     $set: {
    //         alive: false
    //     }
    // }, {returnOriginal: false}).then(result => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5cfb8c4680e9b513cef4e10f")
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Margerine'
        }
    }, {returnOriginal: false}).then(result => {
        console.log(result);
    });


    client.close()

    });