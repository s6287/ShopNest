import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './page/Home';
import Product from './page/Product';
import Cart from './page/Cart';
import About from './page/About';
import Contact from './page/Contact';
import { CartProvider, AuthProvider } from "./Page/Context";
import { ThemeProvider } from "./Page/ThemeContext";
import ProductDetails from './Page/ProductDetails';
import Checkout from './Page/Checkout';
import Login from './Page/Login';
import Register from './Page/Register';
import NotFound from './Page/NotFound';


const App = () => {
  return (
    <>
   

{/* Router Navigation */}
<ThemeProvider>
  <CartProvider>
    <AuthProvider>
   <Router>
   <Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product" element={<Product/>}/>
<Route path="/product/:id" element={<ProductDetails/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="*" element={<NotFound/>}/>

</Routes>
   </Router>
    </AuthProvider>
  </CartProvider>
</ThemeProvider>

   

   </>

   
  )
}

export default App