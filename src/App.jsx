import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Details from './pages/details'
import Favorites from './pages/favorites'

function App() {
  return (
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
