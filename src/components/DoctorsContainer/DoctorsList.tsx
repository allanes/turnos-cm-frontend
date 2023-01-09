import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import { Medico } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'

interface Props {
  doctorsList: Array<Medico>
  onDeleteDoctor: (id: number) => void 
}

const keysTableDoctors = [
  "Id",
  "Nombre, Apellido",
  "Email",
  "Teléfono",
  "Especialidad",
  "Consultorio"
]

export const DoctorsList = ({ doctorsList, onDeleteDoctor }: Props) => {

  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-xl'>
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
                <td><button className='icons-border icon--size icon--delete'
                  type='button'
                  onClick={() => { onDeleteDoctor(doctor.id) }} >
                  <img className='icon-img--size' src={deleteIcon} alt="" />
                </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
