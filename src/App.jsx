import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './components/header'
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
