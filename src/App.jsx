import './App.css'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import About from './components/About'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

function App() {
  const lightMode = {
    color:"black",
    backgroundColor:"white"
  }
  const nlightMode = {
    color:"black",
    backgroundColor:"rgba(128, 128, 128, 0.3)"
  }
  const ndarkmode = {
    color:"white",
    backgroundColor:"rgba(128, 128, 128, 0.3)"
  }
  const darkMode = {
    color:"white",
    backgroundColor:"black"
  }

  const blueMode = {
    color:"white",
    backgroundColor:'#ADD8E6'
  }
const[blue,cngBlue]=useState('white')
const blueHandler =()=>{
  if(blue==='white'){
    cngBlue('blue')
  }
  else{
    cngBlue('white')
  }
}
  const red = {
    color:"white",
    backgroundColor:'#E63946'
  }
const[redm,cngRed]=useState('w')
const redHandler =()=>{
  if(redm==='w'){
    cngRed('r')
  }
  else{
    cngRed('w')
  }
}

  const[mode, cngMode]=useState('light')
  const modeHandler =()=>{
    if(mode==='light'){
      cngMode('dark')
    }
    else{
      cngMode('light')
    }
  }
  return (
    <>
      <Navbar mode={mode==='light'?nlightMode:ndarkmode} title="TextUtils"bhandler={blueHandler} rhandler={redHandler} mhandler={modeHandler}/>
    <Routes>
      <Route path="/" element={
        <Textform mode={mode==='light'&&blue==='white'&&redm==='w'?lightMode:((blue==='blue'&&redm!=='r'? blueMode:(redm==='r'?red:darkMode)))}/>
      }/>
      <Route path="/about"element={
        <About mode={mode==='light'&&blue==='white'&&redm==='w'?lightMode:((blue==='blue'&&redm!=='r'? blueMode:(redm==='r'?red:darkMode)))}/>
      }/>
    </Routes>
    </>
  )
}
export default App
