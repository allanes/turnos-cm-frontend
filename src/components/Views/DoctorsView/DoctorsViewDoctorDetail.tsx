import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Medico } from '../../../codegen_output'
import { MedicoConTurnos } from '../../../codegen_output'
import { MedicosService } from '../../../codegen_output'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
  }, [doctorId, doctor])

  const notifyNextTurn = ( message: String) => {
    toast.success(message, {
      position: toast.POSITION.TOP_CENTER,
      
    });
  };
  
  const notifyPreviousTurn = ( message: String) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  
  const handlePreviousTurn = (doctorId: Number): void => {
    MedicosService.handlePreviousTurnApiV1DoctorsIdPreviousPatientGet(Number(doctorId))
    notifyPreviousTurn("Retrocedio un turno")
  }
  
  const handleNextTurn = (doctorId: Number): void => {
    MedicosService.handleNextTurnApiV1DoctorsIdNextPatientGet(Number(doctorId))
    notifyNextTurn("Avanzó un turno")
  }

  return (
    <div className='container-sm'>
      <div className='text-container'>
        <p className='color-mi-grey-blue'>Dr./Dra. </p>
        <blockquote className="blockquote text-center">
          <p className='h2 '>{doctor?.nombre}, {doctor?.apellido}</p>
        </blockquote>
      </div>
      <div className='container-button my-4 '>
        <button type='button' className="btn btn-outline-warning" onClick={() => { handlePreviousTurn(Number(doctor?.id)) }} >
          <p className='my-2'>Retroceder turno</p>
        </button>
        <button type='button' className="btn btn-success px-4" onClick={() => { handleNextTurn(Number(doctor?.id)) }} >
          <p className='my-2'>Avanzar turno</p>
        </button>
      </div>
      {doctor?.turnos?.length === 0
        ? <div>
            <blockquote className="blockquote text-center">
              <p className='text-container'>¡ No tenés turnos asignados !</p>
            </blockquote>
          </div>
        : <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
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
      }
      <ToastContainer autoClose={1500} />
    </div>
  )
}


