import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Product from './pages/Product.jsx'
import ProductDetail from './components/ProductDetail.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout /> }>
            <Route index element={<Home />}/> 
            <Route path="about" element={<About />}/> 
            <Route path="product" element={<Product />}/> 
            <Route path="/product/:id" element={<ProductDetail/>}/> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
