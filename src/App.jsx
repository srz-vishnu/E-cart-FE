// import React from 'react'
// import Login from './components/Login'
// import Nav from './components/Nav'
// import Footer from './components/Footer'
// import Product from './components/Products'
// import Hero from './components/Hero'


// const App = () => {
//   return (
//     // <div className='grid w-[100%] h-screen place-items-center bg-gray-200'>
//     // <Login/>
//      <div>
//      <Nav/>
//      <Hero/>
//      <Product/>
//      <Footer/> 
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate  } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/CartPage'
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectRoute';
import { CartProvider } from './context/context';

function AppWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={isLoginPage ? 'grid w-[100%] h-screen place-items-center bg-gray-200' : ''}>
      <Routes>
       <Route path="/" element={<Navigate to="/login" replace />} />
       <Route path="/login" element={<Login />} />
       {/* <Route path="/home" element={<Home />} /> */}
       <Route path="/home" element={ <ProtectedRoute> <Home /></ProtectedRoute> } />
       <Route path="/profile" element={<ProtectedRoute>  <Profile/></ProtectedRoute> }/>
       {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
       <Route path="/product/:id" element={<ProtectedRoute>  <ProductDetails/></ProtectedRoute> }/>
       <Route path="/cart" element={ <ProtectedRoute> <Cart /> </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
      <AppWrapper />
      </CartProvider>
    </Router>
  );
}


