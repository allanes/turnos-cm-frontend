import React, { useEffect, useState } from 'react'
import { Patient } from '../../types/types'
import { patientList_initial_states } from '../../services/patientList_initial_states'
import { PatientList } from './PatientList'
import { NewPatient } from '../Forms/NewPatient'

interface PatientState {
  patient: Patient[]
}
export const PatientContainer = () => {

  const [patientsList, setPatientsList] = useState<PatientState["patient"]>([])
  // const [newPatients, setNewPatients] = 

  useEffect(() => {
    setPatientsList(patientList_initial_states)
  }, [])

  const handleNewPatient = (newPatient: Patient): void => {
    setPatientsList( patient => [...patientsList, newPatient])
  }
  return (
    <div>
      <PatientList patientsList={patientsList}/>
      <NewPatient onNewPatient={handleNewPatient} />
    </div>
  )
}
