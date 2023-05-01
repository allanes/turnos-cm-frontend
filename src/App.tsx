import React, { useState, useEffect } from 'react';

import { AdminView } from './components/Views/AdminView';
import { PatientView } from './components/Views/PatientsView/PatientViewContainer';
import { DoctorsView } from './components/Views/DoctorsView/DoctorsView';
import Error404 from './components/Views/Error404';

const renderSwitch = (props: string) => {
  switch (props) {
    case 'patientsView':
      return <PatientView />;
    case 'doctorsView':
      return <DoctorsView />;
    default:
      return <AdminView />;
  }
};

interface appState {
  route: Array<string>
}

function App() {

  const [currentRoute, setCurrentRoute] = useState<appState["route"]>([]);

  useEffect(() => {
    console.log(window.location);
    setCurrentRoute((window.location.pathname).split("/"));
  }, [])
  
  useEffect(() => {
    console.log(currentRoute);
  }, [currentRoute])

  return (
    <>
      {renderSwitch(currentRoute[1])}
    </>
  );
}

export default App;
