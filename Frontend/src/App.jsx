import React from 'react'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Home from './Pages/Home'
import NextPage from './Pages/NextPage'
import { Toaster } from 'react-hot-toast';
import { Routes , Route } from "react-router"


function App() {
  return (
    
    <>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/main' element={<NextPage/>}/>
      </Routes>

      <Toaster toastOptions={{
        style: {
          background: '#e68200ff',
          color: '#000000ff',
          fontSize : "16px" , 
        },
      }}/>
    </>
  )
}

export default App
