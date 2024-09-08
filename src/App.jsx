import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './assets/Component/Login'
import Signup from './assets/Component/Signup'

import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route path='/login' element= {<Login/>}></Route>
    
      <Route path='/signup' element= {<Signup/>}></Route>
    </Routes>
 
    
       
    </>
  )
}

export default App
