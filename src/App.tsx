import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header/Header';
import { RoomContainer } from './components/RoomContainer/RoomContainer';

function App() {
  return (
    <div>
      <Header />
      <RoomContainer />      
    </div>
  );
}

export default App;
