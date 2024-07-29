// backend of the todo app 
const express = require('express');
const app = express();
const cors = require('cors');
  const {createTodo,updateTodo} = require('./type');
  const {todo} = require('./db');
  app.use(express.json());
  app.use(cors({}));
app.post('/todo', async function(req,res){
     
  const createPayload = req.body;
  const  parsePayload = createTodo.safeParse(createPayload);
    
     if(!parsePayload.success){

        res.status(411).json({

          msg: "You put a wrong input"

        })
        return;
     }
      
      await todo.create({
        title: createPayload.title,
        description: createPayload.description,
         completed : false
      })

      res.json({

         msg:"todo created"

      })

})

app.get('/todos', async function(req,res){
   
    const todos= await todo.find({});
         
        res.json({

         todo 

        })
})

app.put('/completed', async function(req,res){
     const updatePayload = req.body;
     const parsePayload = updateTodo.safeParse(updatePayload);
        if(!updatePayload.success){
  
            res.status(411).json({
              msg:" You sent the wrong  input "
            })
       
             return;

        }
       
        await todo.update({
        _id: req.body.id
        },{
         completed:true
        })
        
        res.json({
     
          msg:"Todo is marked completed"

        })
})  

app.listen(3000);

