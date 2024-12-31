import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LeadCreate from './components/LeadCreate'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='lead/create/' element={<LeadCreate></LeadCreate>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
