import React from 'react'
import { Turno } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'
import Swal from 'sweetalert2'
import { Medico } from '../../codegen_output'
import { Paciente } from '../../codegen_output'

interface Props {
  doctorsList: Array<Medico>
  patientsList: Array<Paciente>
  turnsList: Array<Turno>
  onDeleteTurn: (id: number) => void
}

const keysTabTurns = [
  "Id",
  "Nro. de orden",
  "Médico",
  "Paciente",
  "Motivo de consulta",
  "Estado",
  "Fecha",
  ""
]

export const TurnsList = ({doctorsList, patientsList, turnsList, onDeleteTurn}: Props) => {

  const handleDelete = ( turn: Turno ) => {
    Swal.fire({
      title:'¿Estás seguro que deseas eliminar el turno?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      icon: 'warning',
      confirmButtonColor: '#ff2d55'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'error')
        onDeleteTurn(turn.id)
      } 
    })
  }

  const searchDoctor = ( doctorId: number | undefined ) => {
    return doctorsList.find(doctor => doctor.id === doctorId);
  }

  const searchPatient = ( patientId: number | undefined ) => {
    return patientsList.find(patient => patient.id === patientId);
  }

  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-xl'>
        <thead className='table-success'>
          <tr>
            {keysTabTurns.map((item, index) => {
              return (
                <th className='text-center' key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {turnsList.map((turn, index) => {
            return (
              <tr className='text-center' key={index} >
                <th scope='row'>{turn.id}</th>
                <td>{turn.nro_orden}</td>
                <td>{searchDoctor(turn.id_medico)?.nombre}, {searchDoctor(turn.id_medico)?.apellido}</td>
                <td className='text-start'>{searchPatient(turn.id_paciente)?.nombre}, {searchPatient(turn.id_paciente)?.apellido}</td>
                <td className='text-start'>{turn.motivo_consulta}</td>
                <td>{turn.pendiente === true ? "Pendiente" : "Atendido"}</td>
                <td>{turn.fecha}</td>
                <td><button className='icons-border icon--size icon--delete'
                  type='button'
                  onClick={() => { handleDelete(turn) }} >
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
