import React from 'react'
import { Consultorio } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'

interface Props {
  officesList: Array<Consultorio>
  onDeleteOffice: (id: number) => void
}

const keysTabOffices = [
  "Id",
  "Sala",
  "Descripción"
]

export const OfficesList = ({officesList, onDeleteOffice}: Props) => {

  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-l'>
        <thead>
          <tr>
            {keysTabOffices.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {officesList.map((office, index) => {
            return (
              <tr key={index} >
                <th scope='row'>{office.id}</th>
                <td>{office.sala}</td>
                <td>{office.descripcion}</td>
                <td><button className='icons-border icon--size icon--delete'
                  type='button'
                  onClick={() => { onDeleteOffice(office.id) }} >
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
