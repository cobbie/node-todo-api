 const {ObjectID} = require('mongodb');
 
 const {mongoose} = require('../server/db/mongoose');
 const {Todo} = require('../server/models/todo');
 const {User} = require('../server/models/user');

 const id = "5cff551518cae426abfaa2fb11";

//  if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
//  }

// //  Todo.find({
// //      _id: id
// //  }).then(todos => {
// //      console.log('Todos', todos);
// //  });

// //  Todo.findOne({
// //     _id: id
// // }).then(todo => {
// //     console.log('Todos', todo);
// // });

// Todo.findById(id).then(todo => {
//     if(!todo){
//         return console.log("ID Not found")
//     }
//     console.log('Todo by ID', todo);
// }).catch(e => console.log(e));

const userId = "5d00a7ad0374a7d300234446";
User.findById(userId).then(user => {
    if(!user){
        return console.log("User not found");
    }
    console.log("User details: ", user);
}, e => console.log(e));