import React from 'react'
import { Paciente } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'

interface Props {
  patientsList: Array<Paciente>
  onDeletePatient: (id: number) => void
}

const keysTabPatients = [
  "Id",
  "Nombre, Apellido",
  "Email",
  "Telefono",
  "Turnos"
]

export const PatientsList = ({patientsList, onDeletePatient}: Props) => {
  return (
    (
      <>
        <table className='table table-striped table-hover table-xxl doc-table-container'>
          <thead>
            <tr>
              {keysTabPatients.map((item, index) => {
                return (
                  <th key={index}>{item}</th>
                )
              })}
            </tr>
          </thead>
          <tbody className='table-group-divider' >
            {patientsList.map((patient, index) => {
              return (
                <tr key={index} >
                  <th scope='row'>{patient.id}</th>
                  <td>{patient.nombre}, {patient.apellido}</td>
                  <td>{patient.email}</td>
                  <td>{patient.telefono}</td>
                  <td>{patient.turnos?.length}</td>
                  <td><button className='icons-border icon--size icon--delete' type='button' onClick={() => { onDeletePatient(patient.id) }} ><img className='icon-img--size' src={deleteIcon} alt="" /></button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  )
}
