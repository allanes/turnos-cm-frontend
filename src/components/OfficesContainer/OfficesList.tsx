import { useEffect } from 'react'
import { RegistroConsultoriosCreate, Consultorio } from '../../codegen_output'
import { OfficesWithDoctor } from "../../types/types"
import { Medico } from '../../codegen_output'
import { RegistroConsultorios } from "../../codegen_output"
import { ConsultorioDetallado } from '../../codegen_output'
import deleteIcon from '../../assets/icons/outline_delete_white_24dp.png'

interface Props {
  officesList: Array<Consultorio>
  doctorsList: Array<Medico>
  recordWithDoctor: Array<RegistroConsultorios>
  officesListWithDetails: Array<ConsultorioDetallado>
  onDeleteOffice: (id: number) => void
  onRelease: (registro: RegistroConsultoriosCreate) => void
}

const keysTabOffices = [
  "Consultorio",
  "Sala",
  "Médico asignado",
  "Nro. de turnos",
  ""
]

export const OfficesList = ({ officesList, doctorsList, recordWithDoctor, officesListWithDetails, onDeleteOffice, onRelease }: Props) => {

  const searchDoctorID = (officeId: number | undefined) => {
    return recordWithDoctor.find(record => record.id_consultorio === officeId);
  }

  const searchDoctor = (doctorId: number | undefined) => {
    return doctorsList.find(doctor => doctor.id === doctorId);
  }

  const searchPatientList = (officeId: number | undefined) => {
    return officesListWithDetails.find(officeWithDetails => officeWithDetails.id === officeId);
  }

  return (
    <>
      <div className='table-container-xl'>
        <div className='table-container-l text-center mb-1'>
          <p className='h3'>Lista de Consultorios</p>
        </div>
        <table className='table table-striped table-hover text-center table-container-l'>
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
            {officesList.map((office, index) => {
              return (
                <tr key={index} >
                  <th scope='row'>{office.numero}</th>
                  <td>{office.sala}</td>
                  <td>
                    {(searchDoctor(searchDoctorID(office.id)?.id_medico)?.nombre)
                      ?
                      `${searchDoctor(searchDoctorID(office.id)?.id_medico)?.nombre},
                      ${searchDoctor(searchDoctorID(office.id)?.id_medico)?.apellido}`
                      : "-"
                    }
                  </td>
                  <td>{searchPatientList(office.id)?.pacientes?.length
                       ? searchPatientList(office.id)?.pacientes?.length
                       : "-"
                      }</td>
                  <td><button className='btn btn-primary'
                    type='button'
                    onClick={() => { onRelease({ id_consultorio: office.id }) }} >
                    <p className='m-0'>Liberar consultorio</p>
                  </button>
                  </td>
                  {/* <td><button className='icons-border icon--size icon--delete'
                    type='button'
                    onClick={() => { onDeleteOffice(office.id) }} >
                    <img className='icon-img--size' src={deleteIcon} alt="" />
                  </button>
                  </td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
