import React from 'react';
import {Route, Link, Routes } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import './App.css';
import Homepage from './components/Homepage';
import Cryptocurrencies from './components/Cryptocurrencies';
import CryptoDetails from './components/CryptoDetails';
import News from './components/News';
import Navbar from './components/Navbar';

const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes"> 
         <Routes>
            <Route path="/" element={<Homepage />}>
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
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;
        
        
     

