import React from 'react'
import { HeaderDoctorView } from '../../Header/HeaderDoctorView'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DoctorsViewListContainer } from './DoctorsViewListContainer'
import { DoctorsViewDoctorDetail } from './DoctorsViewDoctorDetail'

export const DoctorsView = () => {
  return (
    <>
      <div>
        <HeaderDoctorView />
        <Router>
          <div className='pages-container'>
            <Routes>
              <Route path="/doctorsView" element={<DoctorsViewListContainer />} />
              <Route path="/doctorsView/doctor/:IdDoctor" element={<DoctorsViewDoctorDetail />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  )
}
