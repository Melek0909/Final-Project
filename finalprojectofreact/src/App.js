import React from 'react';
import Navbar from './components/navbar';
import Aboutus from './components/aboutus';
import Caroussel from './components/caroussel';
import Carmarks from './components/carmarks';
import Homepage from './components/homepage';
import {Routes, Route} from 'react-router-dom';
import Audi from './data/audi';
import Bmw from './data/bmw';
import ShoppingCart from './components/shoppingCart';
import { CartProvider } from 'react-use-cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Ford from './data/ford';
import Hyundai from './data/hyundai';
import Mercedes from './data/mercedes';
import Nissan from './data/nissan';
import Peugeot from './data/peugeot';
import Renault from './data/renault';
import Volkswagen from './data/volkswagen';
import Loginpage from './components/login';
import Registerpage from './components/register';


function App() {
  return (
    <>
    <CartProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Carmarks" element={<Carmarks/>}/>
        <Route path="/Audi" element={<Audi/>}/>
        <Route path="/Bmw" element={<Bmw/>}/>
        <Route path="/Ford" element={<Ford/>}/>
        <Route path="/Hyundai" element={<Hyundai/>}/>
        <Route path="/Mercedes" element={<Mercedes/>}/>
        <Route path="/Nissan" element={<Nissan/>}/>
        <Route path="/Peugeot" element={<Peugeot/>}/>
        <Route path="/Renault" element={<Renault/>}/>
        <Route path="/Volkswagen" element={<Volkswagen/>}/>
        <Route path="/Cart" element={<ShoppingCart/>}/>
        <Route path="/Novelties" element={<Caroussel/>}/>
        <Route path="/Login" element={<Loginpage/>}/>
        <Route path="/Register" element={<Registerpage/>}/>
      </Routes>
      <Aboutus/>
    </CartProvider>
    </>
  );
}
export default App;
