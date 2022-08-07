
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Components/AnimeHome/animeHome'
import LandingPage from './Components/LandingPage/landingPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>


  )
}

export default App
