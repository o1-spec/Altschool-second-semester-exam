///import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import ErrorTest from './ErrorTest';
import CounterApp from './counterlogic/counterapp';
import Error from './error';
import ErrorBoundarySuccess from './ErrorBoundarySuccess'; 

function App() {
  useEffect(()=> {
    Aos.init({duration: 2500})
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="error" element={<ErrorTest />} />
        <Route path="/error-success" element={<ErrorBoundarySuccess />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
