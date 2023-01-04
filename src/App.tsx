import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { OfficesContainer } from './components/OfficesContainer/OfficesContainer';
import { PatientContainer } from './components/PatientContainer/PatientContainer';

function App() {

  return (
    <div className='mi-app'>
      <Header />
      {/* <PatientContainer /> */}
      <OfficesContainer />
    </div>
  );
}

export default App;
