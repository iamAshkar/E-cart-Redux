
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Wishlist from './pages/Wishlist'
import Pagenotfound from './pages/PageNotFound'
import Cart from './pages/Cart'



function App() {
  
  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
