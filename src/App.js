import React from 'react'
import Navbar from './Components/Navbar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { getuser } from './Components/action/useraction';
import { useEffect } from 'react';
import Home from './Components/Home';

const App = () => {

  const disppatch = useDispatch()

  useEffect(() => {
    disppatch(getuser())

  }, [disppatch])


  const { isAuthenticated, isLoading } = useSelector(state => state.user)
  console.log(isAuthenticated)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={!isAuthenticated ? <Register /> : <Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App