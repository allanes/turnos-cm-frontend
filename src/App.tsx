import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { OfficesContainer } from './components/OfficesContainer/OfficesContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideBar } from './components/SideBar/SideBar';
import { DoctorsContainer } from './components/DoctorsContainer/DoctorsContainer';
import { PatientsContainer } from './components/PatientsContainer/PatientsContainer';
import { TurnsContainer } from './components/TurnsContainer/TurnsContainer';
import { categoriesList_sidebar } from './services/categoriesList_sidebar';
import { OfficesContainerPatientView } from './components/OfficesContainerPatientView/OfficesContainerPatientView';

function App() {

  return (
    <>
      <Header />
      <div className='mi-app'>
        <Router>
          <div className='sidebar-container'>
            <SideBar />
          </div>
          <div className='pages-container'>
            <Routes>
              <Route path='/' element={<OfficesContainer />} />
              <Route path={categoriesList_sidebar[1].link} element={<DoctorsContainer />} />
              <Route path={categoriesList_sidebar[2].link} element={<PatientsContainer />} />
              <Route path={categoriesList_sidebar[3].link} element={<TurnsContainer />} />
              <Route path={categoriesList_sidebar[4].link} element={<OfficesContainerPatientView />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
