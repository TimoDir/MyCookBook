import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className='BookInside'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddRecipe' element={<Home />} />
        <Route path='RecipesList' element={<Home />} />
        <Route path='MenuCreator' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
