import React,{useState} from 'react';
import axios from 'axios'
import {Link ,Routes ,Route,useNavigate, useSubmit} from 'react-router-dom'
import Show from './show.js'
import { Error } from 'mongoose';


function Form1() {

  const[title, setTitle] = useState("")
  const[txt, setTxt] = useState("")
  const xyz= title
  const navig= useNavigate()
  
 const submit  = async (e) => {
    

    try {
      await axios.post("http://localhost:5000/",{
        title
      })
      navig('http://localhost:3000/Show')

    }
    catch{
      console.log(Error);
    }
  }

  
  return (
    <><div className="form">
      <form action="POST">
        <h1>hello form</h1>
        Title
        <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea required value={txt} onChange={(e) => setTxt(e.target.value)} />
        <Link to="/Show">
          <button type="submit" onClick={(e)=>submit()} value="submit">Submit</button></Link>
        <h1>{xyz}</h1>
        <h2>{txt}</h2>
      </form>

    </div></>

  )
};

export default Form1;