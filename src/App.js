import React from 'react';
import Navbar from './components/Navbar';
import {  Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import "./App.css"
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';

const App = () => {
  return(
    <div className="App">
     <div className='navbar'>
      <Navbar></Navbar>
     </div>
     <div className='main'>
     <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={<Homepage />}>
            </Route>
            <Route path="/exchanges" element={<Exchanges  />}>
            </Route>
            <Route path="/cryptocurrencies" element={<Cryptocurrencies />}>
            </Route>
            <Route path="/crypto/:coinId" element={<CryptoDetails  />}>
            </Route>
            <Route path="/news" element={<News  />}>
            </Route>
          </Routes>
        </div>
      </Layout>
     </div>
     <div className='footer'>

     </div>
    </div>
  )
};

export default App;

