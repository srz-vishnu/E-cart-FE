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

function AppWrapper() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={isLoginPage ? 'grid w-[100%] h-screen place-items-center bg-gray-200' : ''}>
      <Routes>
       <Route path="/" element={<Navigate to="/login" replace />} />
       <Route path="/login" element={<Login />} />
       <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}


