import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div>
        <Navbar />
        <Route exact path ="/AboutUs" component = {AboutUs} />
        <Route exact path ="/Product" component = {Product} />
        <Route exact path ="/Contact" component = {Contact} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
