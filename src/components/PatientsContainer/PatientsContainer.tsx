import React, { useEffect, useState } from 'react'
import { Paciente, PacientesService, ApiError, CancelablePromise } from '../../codegen_output'
import { PatientsCreate } from './PatientsCreate'
import { PatientsList } from './PatientsList'
import Swal from 'sweetalert2'

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

  const handleNewPatient = async (newPatient: Paciente): CancelablePromise<void> => {
    try {
      await PacientesService.createPacienteApiV1PatientsPost(newPatient)
      Swal.fire(
        `${newPatient.nombre}, ${newPatient.apellido}`,
        'ha sido guardado con éxito',
        'success'
      )
      setPatientsList( patient => [...patientsList, newPatient])
    }
    catch (error) {
      const err = error as ApiError; // or a custom error type if you know the structure
      let errorMessage = 'An error occurred.'; // Start with the message property.

      if (err.body && err.body.detail) {
        // If the body property has a message property, add it to the error message.
        errorMessage = err.body.detail;
      }
      Swal.fire('Error', errorMessage, 'error');
    }
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
