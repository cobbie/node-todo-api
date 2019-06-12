var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
// save new something

var app = express();

// takes json and converts to obj
app.use(bodyParser.json());
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    })

    todo.save().then(doc => {
        res.send(doc);
        console.log('successfully sent response');
    }, e => {
        res.status(400).send(e);
    })});

app.get('/todos', (req, res)=>{ 
    Todo.find().then(todos => {
        res.send({todos});
    }, e => {
        res.status(400).send(e);
    })
})

// GET /todos/1234324

app.get('/todos/:id', (req, res) => {
    console.log(req.params);
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send('Invalid ID!');
    }
    Todo.findById(req.params.id).then(todo => {
        if(!todo){
            return res.status(404).send(console.log('No todo with that ID!'));
        };
        res.send(todo);
    },e => {
        res.send({});
    })



    // Validate id using isValid
        //404 - send back empty send

    //findById
        //success
            // if todo: send bacl
            // if no todo - send back 404 w empty body
        //err
            // 400 - and send empty body back
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};