import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import Products from './components/Products';
import { productData } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      
     
      <Feature />
      <Products data={productData} />
      <Footer />
    </Router>
  );
}

export default App;
