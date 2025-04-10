import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Branding from "./assets/Branding.svg"
import Utamaa from './Pages/Utamaa'
function App() {




  return (
    <>

  <div>

    <Router>
      <Routes>
        <Route path='/' element={ <Utamaa />} />
      </Routes>
    </Router>


  </div>
      
    </>
  )
}

export default App;
