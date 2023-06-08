
import './App.css';
import ReactDOM from 'react-dom';
import { Link,BrowserRouter , Routes,Route } from 'react-router-dom';

import Form1 from './form_field.js';

function App() {
  
  return (
    
    <><div className="App">
      <div className="BM">Blog Maker</div>
      <Link to="/form_field">New Article</Link>
    </div><Routes>
        <Route exact path="/form_field" element={<Form1 />} />



      </Routes></>
  )};

export default App;
