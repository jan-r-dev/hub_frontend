import React from 'react';
import './App.css';

import Header from './components/main/header/header'
import Navbar from './components/main/navbar/navbar'
import Content from './components/main/content/content'
import Footer from './components/main/footer/footer'

const App = () => {
  return ( 
    <div className="container">
        <Header></Header>
        <Navbar></Navbar>
        <Content></Content>
        <Footer></Footer>
    </div>
   );
}
 
export default App;
