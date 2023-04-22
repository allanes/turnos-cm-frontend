import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Medico } from '../../../codegen_output'
import { MedicoConTurnos } from '../../../codegen_output'
import { MedicosService } from '../../../codegen_output'

interface DoctorDetailState {
  doctor: MedicoConTurnos
}

const keysTablePatiens = [
  "Nº turno",
  "Apellido, nombre",
]

export const DoctorsViewDoctorDetail = () => {

  const { doctorId } = useParams()
  const [doctor, setDoctor] = useState<DoctorDetailState["doctor"]>()

  useEffect(() => {
    MedicosService.readMedicoApiV1DoctorsIdGet(Number(doctorId))
      .then(doctor => {
        setDoctor(doctor)
      })
  }, [doctorId])

  const handlePreviousTurn = (doctorId: Number): void => {
    MedicosService.handlePreviousTurnApiV1DoctorsIdPreviousPatientGet(Number(doctorId))
    window.location.reload()
  }

  const handleNextTurn = (doctorId: Number): void => {
    MedicosService.handleNextTurnApiV1DoctorsIdNextPatientGet(Number(doctorId))
    window.location.reload()
  }

  return (
    <div>
      <div className='card-container'>
        <p>Dr./Dra. {doctor?.nombre}, {doctor?.apellido}</p>
      </div>
      <button type='button' className="btn btn-warning" onClick={() => { handlePreviousTurn(Number(doctor?.id)) }} >
        Retroceder turno
      </button>
      <button type='button' className="btn btn-success" onClick={() => { handleNextTurn(Number(doctor?.id)) }} >
        Avanzar turno
      </button>
      <table className='table table-striped table-hover table-xxl table-container-xl'>
        <thead>
          <tr>
            {keysTablePatiens.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody className='table-group-divider' >
          {doctor?.turnos?.map((turn, index) => {
            const isFirstPatient = index === 0;
            return (
              <tr key={index} className={isFirstPatient ? 'table-success' : ''}>
                <th scope='row'>{turn.id}</th>
                <td>{turn.nombre_paciente}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}


