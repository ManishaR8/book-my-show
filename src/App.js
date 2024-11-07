import React from 'react'
import NavbarMain from './components/Navbar/NavbarMain'
import MoviesCont from './components/movies-section/MoviesCont'
import './components/styles/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieCard from './components/movie-detail/MovieCard';
import ContentPage from './components/Navbar/ContentPage';
import Carousel from './components/Carousel';

const App = () => {
  return (

    <Router>
      <NavbarMain />
      <Carousel />
      <Routes>
        <Route path='/' element={<MoviesCont />} />
        <Route path='/content/:category' element={<ContentPage />} /> 
        <Route path='/:title/:id' element={<MovieCard />} />
      </Routes>
    </Router>
  )
}

export default App