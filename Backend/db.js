const mongoose = require('mongoose');
  
//  env file 

  mongoose.connect("mongodb://localhost:27017/test");

const todoschema = new mongoose.Schema({

    title : String,
    description: String,
    completed: Boolean 

})

const todo = mongoose.model('todo',todoschema);

module.exports={

     todo

}



