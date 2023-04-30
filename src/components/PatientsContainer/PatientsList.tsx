import React from 'react'
import { Paciente } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'
import Swal from 'sweetalert2'

interface Props {
  patientsList: Array<Paciente>
  onDeletePatient: (id: number) => void
}

const keysTabPatients = [
  "Dni",
  "Nombre, Apellido",
  "Email",
  "Telefono",
  ""
]

export const PatientsList = ({ patientsList, onDeletePatient }: Props) => {

  const handleDelete = (patient: Paciente) => {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el paciente?',
      html: `${patient.nombre}, ${patient.apellido}`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      icon: 'warning',
      confirmButtonColor: '#ff2d55'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'error')
        onDeletePatient(patient.id)
      }
    })
  }

  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-xl'>
        <thead className='table-success'>
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
                <td>
                  <button className='icons-border icon--size icon--delete'
                    type='button'
                    onClick={() => { handleDelete(patient) }} >
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
