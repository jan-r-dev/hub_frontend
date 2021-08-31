import React from 'react';
import './App.css';

import Header from './components/main/header/Header'
import Navbar from './components/main/navbar/Navbar'
import Content from './components/main/content/Content'
import Footer from './components/main/footer/Footer'

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
