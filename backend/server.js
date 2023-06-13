import express  from "express";
import collection from './../frontend_/src/mongo.js';
import cors from 'cors'
import mongoose  from "mongoose";
import { Model, ObjectId } from "mongoose";
import collection1 from "./../frontend_/src/mongo.js";




const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res) => {
    console.log("hello world")
})

app.post("/",async(req,res) => {
    console.log('proccessing')
    const {title}=req.body

    const data1={
        title:title
    }

    const id='6476779183fb88c15065f0c3'

    app.get("/api/current", async(req,res) =>{
        try{
            let article1 = await collection1.find({'title':'copper'});
            res.status(200).json(article1)
        }
        catch{
            res.status(500).send("internal server error")
            console.log("internal server error")
            
        }
    })

    await collection1.insertMany([data1])
})

app.listen(5000, () => {console.log('server started on port 5000')})