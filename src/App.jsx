import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Banner from './components/Banner'
import Cards from './components/Cards'
import Footer from './components/footer'

function App() {

  return (
    <>
      <div className="body">
        <Header></Header>
        <Banner></Banner>
        <Cards></Cards>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
