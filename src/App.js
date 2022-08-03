import React from 'react';
import GlobalStyle from './styles/global'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import Signup from './pages/Signup/Signup'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <GlobalStyle/>
       <ScrollToTop/>
      <Navbar/>
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      </Routes>
      <Footer />
       </BrowserRouter>
    </div>
  );
}

export default App;
