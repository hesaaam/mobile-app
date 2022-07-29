import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './layout/Layout'
import "./styles/main.scss"
import Home from './page/Home'
import Product from './page/Product'
import NotFound from './page/NotFound'
import Card from './page/Card'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
          <Layout>
            <Home></Home>
          </Layout>} />
          
          <Route path='/card' element={
          <Layout>
            <Card></Card>
          </Layout>} />

          <Route path='/Product/:id' element={<Product/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>



      
    </>
  )
}

export default App
