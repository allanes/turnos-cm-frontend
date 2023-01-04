import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Medico } from '../../codegen_output'

interface Props {
  doctorsList: Array<Medico>
}

const keysTableDoctors = [
  "Id",
  "Nombre, Apellido",
  "Email",
  "Teléfono",
  "Especialidad",
  "Consultorio",
  "Activo",
  "Turnos"
]

export const DoctorsList = ({ doctorsList }: Props) => {

  return (
    <>
      <table className='table table-striped table-hover table-xxl doc-table-container'>
        <thead>
          <tr>
            {keysTableDoctors.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {doctorsList.map((doctor,index) => {
            return (
              <tr key={index} >
                <th scope='row'>{doctor.id}</th>
                <td>{doctor.nombre}, {doctor.apellido}</td>
                <td>{doctor.email}</td>
                <td>{doctor.telefono}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.consultorio}</td>
                <td>{doctor.activo}</td>
                <td>{doctor.turnos?.length}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
