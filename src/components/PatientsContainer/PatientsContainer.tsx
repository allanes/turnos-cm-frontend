import React, { useEffect, useState } from 'react'
import { Paciente } from '../../codegen_output'
import { PacientesService } from '../../codegen_output'
import { PatientsList } from './PatientsList'

interface PatientsState {
  patients: Array<Paciente>
}

export const PatientsContainer = () => {

  const [patientsList, setPatientsList] = useState<PatientsState["patients"]>([])

  useEffect(() => {
    PacientesService.readPacientesApiV1PatientsGet()
    .then(patients => {
      console.log(patients);
      setPatientsList(patients)
    })
  }, [])

  const handleDelete = (id: number): void => {
    console.log(id);
    PacientesService.deletePacienteApiV1PatientsIdDelete(id)
    setPatientsList(patientsList.filter((patient) => patient.id !== id));
  }
  
  return (
    <div>
      <PatientsList patientsList={patientsList} onDeletePatient={handleDelete} />
    </div>
  )
}
