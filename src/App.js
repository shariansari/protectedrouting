import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Privateroutes from './components/utils/Privateroutes';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Privateroutes/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>

      </BrowserRouter>
    
    </div>
  );
}

export default App;
