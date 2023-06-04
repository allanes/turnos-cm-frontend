import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PatientViewListContainer } from './PatientViewListContainer'
import { PatientViewOfficeList } from './PatientViewOfficeList'
import ReactVideoPlayer from './ReactPlayer';


export const PatientView = () => {
  return (
    <div className='back-grey'>
      <Router>
        <div className='pages-container'>
          <Routes>
            <Route path="/patientsView" element={<PatientViewListContainer />} />
            <Route path="/patientsView/:roomId" element={
              <div className='mi-contenedor-video-y-carousel'>
                <PatientViewOfficeList />
                <ReactVideoPlayer />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

