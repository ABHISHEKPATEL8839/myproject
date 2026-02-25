import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Header />
    <div style={{minHeight : "600px"}}>
      <AllRoutes />
    </div>
    <Footer />
    </>
  )
}

export default App