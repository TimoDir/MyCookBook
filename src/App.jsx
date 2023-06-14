import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { AddRecipe } from './pages/AddRecipe/AddRecipe';
import { RecipesList } from './pages/RecipesList/RecipesList';
import './css/App/App.css';

function App() {
  return (
    <div className='BookInside'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='AddRecipe' element={<AddRecipe />} />
        <Route path='RecipesList' element={<RecipesList />} />
        <Route path='MenuCreator' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
