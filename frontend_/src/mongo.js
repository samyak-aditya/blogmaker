import mongoose from "mongoose";

 

mongoose.connect("mongodb+srv://Samyak:Cyber10@cluster0.t5hemdi.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("connected");
})
.catch(() =>{
    console.log('failed');
})

const newSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    content:{
        type:String,
        required:true,
    },
    Author:{
        type:String
    },
    tags:{
        type
    }

});

const collection1=mongoose.model('collection1',newSchema)

 export default collection1;