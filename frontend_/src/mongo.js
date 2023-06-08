
 const mongoose =require("mongoose")
 

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
        required:true
    }
})

const collection=mongoose.model('articles001',newSchema)

module.exports = collection