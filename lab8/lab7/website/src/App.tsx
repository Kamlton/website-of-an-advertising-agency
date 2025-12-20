import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Footer } from '@my-app/ui-library'
import Home from './pages/Home/Home'
import Services from './pages/Services/Services'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import Portfolio from './pages/Portfolio/Portfolio'
import About from './pages/About/About'
import Contacts from './pages/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App