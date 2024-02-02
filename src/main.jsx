import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ProductLayout from './pages/ProductLayout.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import CartContainer from './components/CartContaier.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Login from './components/loginSignUpPage/Login/Login.jsx'
import SignUp from './components/loginSignUpPage/SignUp/SignUp.jsx'
import User from './components/User/User.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Layout /> }>
            <Route index element={<Home />}/> 

            <Route path='user' element={<User/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<SignUp/>}/>
            <Route path="about" element={<About />}/> 
            <Route path="product" element={<ProductLayout />}/> 
            <Route path="cart" element={<CartContainer/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
