import React,{useState} from 'react';
import axios from 'axios'
import {Link ,Routes ,Route} from 'react-router-dom'
import Show from './show.js'


function Form1() {

  const[title, setTitle] = useState("")
  const[txt, setTxt] = useState("")
  const xyz= title

 const submit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:5000/",{
        title
      })
    }
    catch(e){
      console.log(e);
    }
  }
  
  return (
    <><div className="form">
      <form action="POST">
        <h1>hello form</h1>
        Title
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={txt} onChange={(e) => setTxt(e.target.value)} />
        <Link to="/show">
          <button type="submit" onClick={submit} value="submit">Submit</button></Link>
        <h1>{xyz}</h1>
        <h2>{txt}</h2>
      </form>

    </div><Routes>
        <Route exact path="/show" element={<Show />} />

      </Routes></>

  )
};

export default Form1;