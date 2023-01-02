import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { RoomContainer } from './components/RoomContainer/RoomContainer';
import { PatientContainer } from './components/PatientContainer/PatientContainer';

function App() {

  return (
    <div>
      <Header />
      <PatientContainer />
      <RoomContainer />
    </div>
  );
}

export default App;
