import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Home from './Components/Home'

function App() {

  const RountMy =createBrowserRouter(createRoutesFromElements(


<Route>
  <Route path='/' element={<Home/>}/>
</Route>


  ))


  return (
    <>
    
  <RouterProvider router={RountMy}/>



    </>
  )
}

export default App
