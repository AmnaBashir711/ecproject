// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Page404 from './pages/Page404'
import NavigationBar from './Components/NavigationBar'
import Carouselssect from './Components/Carouselssect'
import Categoriess from './Components/Categoriess'
import CategoriesPage from './Pages/CategoriesPage'
import Footersect from './Components/Footersect'


export default function App() {

 

  return (
   
 <>
   
    <NavigationBar/> 
    
    <Carouselssect/>

    <Categoriess/>

    <Footersect/>

    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/category/: categoryName' element={<CategoriesPage/>} />
      <Route path='*' element={<Page404/>} />
      
      </Routes>
       

          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login/*" element={<Login />} />
        <Route path="/Signup/*" element={<Signup/>} />
        <Route path="*" element={<Page404/>} />
    
      </Routes>
      </>
  );
}