import React, { useEffect, useState } from 'react'
import { Paciente } from '../../codegen_output'
import { PacientesService } from '../../codegen_output'
import { PatientsCreate } from './PatientsCreate'
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

  const handleNewPatient = (newPatient: Paciente): void => {
    PacientesService.createPacienteApiV1PatientsPost(newPatient)
    console.log(newPatient);
    setPatientsList( patient => [...patientsList, newPatient])
  }

  const handleDelete = (id: number): void => {
    PacientesService.deletePacienteApiV1PatientsIdDelete(id)
    setPatientsList(patientsList.filter((patient) => patient.id !== id));
  }
  
  return (
    <div>
      <PatientsCreate onNewPatient={handleNewPatient} />
      <PatientsList patientsList={patientsList} onDeletePatient={handleDelete} />
    </div>
  )
}
