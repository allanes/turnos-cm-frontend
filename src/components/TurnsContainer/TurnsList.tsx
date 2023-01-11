import React from 'react'
import { Turno } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'

interface Props {
  turnsList: Array<Turno>
  onDeleteTurn: (id: number) => void
}

const keysTabTurns = [
  "Id",
  "Id médico",
  "Id paciente",
  "Motivo de consulta",
  "Pendiente",
  "Fecha"
]

export const TurnsList = ({turnsList, onDeleteTurn}: Props) => {
  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-xl'>
        <thead>
          <tr>
            {keysTabTurns.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {turnsList.map((turn, index) => {
            return (
              <tr key={index} >
                <th scope='row'>{turn.id}</th>
                <td>{turn.id_medico}</td>
                <td>{turn.id_paciente}</td>
                <td>{turn.motivo_consulta}</td>
                <td>{turn.pendiente}</td>
                <td>{turn.fecha}</td>
                <td><button className='icons-border icon--size icon--delete'
                  type='button'
                  onClick={() => { onDeleteTurn(turn.id) }} >
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
