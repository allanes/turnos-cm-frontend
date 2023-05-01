import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PatientViewListContainer } from './PatientViewListContainer'
import { PatientViewOfficeList } from './PatientViewOfficeList'

export const PatientView = () => {
  return (
    <div className='back-grey'>
      <Router>
        <div className='pages-container'>
          <Routes>
            <Route path="/patientsView" element={<PatientViewListContainer />} />
            <Route path="/patientsView/:roomId" element={<PatientViewOfficeList />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

