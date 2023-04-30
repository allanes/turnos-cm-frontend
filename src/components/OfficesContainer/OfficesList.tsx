import { Medico } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'
import { OfficesWithDoctor } from "../../types/types"



interface Props {
  offices: Array<OfficesWithDoctor>
  onDeleteOffice: (id: number) => void
}


const keysTabOffices = [
  "Id",
  "Descripción",
  "Sala",
  "Médico asignado",
  ""
]

export const OfficesList = ({ offices, onDeleteOffice}: Props) => {

  return (
    <>
      <table className='table table-striped table-hover table-xxl table-container-l'>
        <thead className='table-success'>
          <tr>
            {keysTabOffices.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {offices.map((office, index) => {
            return (
              <tr key={index} >
                <th scope='row'>{office.id}</th>
                <td>{office.descripcion}</td>
                <td>{office.sala}</td>
                <td>{office.medico?.nombre}, {office.medico?.apellido}</td>
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
