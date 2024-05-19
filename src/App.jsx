import { useState } from 'react'
import { Navbar, Footer } from './components/components'
import { Home, Checkup, Result } from './Pages/pages'
import { Route, Routes } from 'react-router-dom'
import { ThemeContextProvider } from './context/ThemeContext'
import { DiseaseContextProvider } from './context/DiseaseContext'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <DiseaseContextProvider >
          <Navbar />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/checkUp' Component={Checkup} />
            <Route path='/result' Component={Result} />
            <Route path='*' element={'hi'} />
          </Routes>
        </DiseaseContextProvider >
      </ThemeContextProvider>
      <Footer />
    </>
  )
}

export default App
