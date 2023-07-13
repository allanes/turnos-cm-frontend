import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MedicoConTurnos } from '../../../codegen_output'
import { MedicosService } from '../../../codegen_output'

import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/base/_pallete.scss'


interface DoctorDetailState {
  doctor: MedicoConTurnos
  flag: Boolean
}

const keysTablePatiens = [
  "Nro.",
  "Paciente",
  "Motivo"
]

export const DoctorsViewDoctorDetail = () => {

  const { doctorId } = useParams()
  const [doctor, setDoctor] = useState<DoctorDetailState["doctor"]>()
  const [refreshFlag, setRefreshFlag] = useState<DoctorDetailState["flag"]>(true)

  useEffect(() => {
    MedicosService.readMedicoApiV1DoctorsIdGet(Number(doctorId))
      .then(doctor => {
        setDoctor(doctor)
      })
  }, [doctorId, refreshFlag])

  const notifyNextTurn = ( message: String) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  
  const notifyPreviousTurn = ( message: String) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  
  const handlePreviousTurn = (doctorId: Number): void => {
    MedicosService.handlePreviousTurnApiV1DoctorsIdPreviousPatientGet(Number(doctorId))
    setRefreshFlag(!refreshFlag)
    notifyPreviousTurn("Retrocedio un turno")
  }
  
  const handleNextTurn = (doctorId: Number): void => {
    MedicosService.handleNextTurnApiV1DoctorsIdNextPatientGet(Number(doctorId))
    setRefreshFlag(!refreshFlag)
    notifyNextTurn("Avanzó un turno")
  }

  const handleMotivo = (motivo: String): void => {
    Swal.fire({
      title: 'Motivo de consulta',
      html: `${motivo}`,
      showCancelButton: false,
      confirmButtonText: 'Volver',
      icon: 'info',
      confirmButtonColor: '#0090b2'
    })
  }

  return (
    <div className='container-sm'>
      <div className='text-container'>
        <p className='color-mi-grey-blue'>Dr./Dra. </p>
        <blockquote className="blockquote text-center">
          <p className='h2 '>{doctor?.nombre}, {doctor?.apellido}</p>
        </blockquote>
      </div>
      <div className='container-button my-4'>
        <div className='px-1'>
          <button type='button' className="btn btn-sm btn-outline-warning px-3" onClick={() => { handlePreviousTurn(Number(doctor?.id)) }} >
            <p className='my-1'>Retroceder turno</p>
          </button>
        </div>
        <div className='px-1'>
          <button type='button' className="btn btn-sm btn-outline-success px-3" onClick={() => { handleNextTurn(Number(doctor?.id)) }} >
            <p className='my-1'>Volver a llamar</p>
          </button>
        </div>
        <div className='px-1'>
          <button type='button' className="btn btn-sm btn-success px-3" onClick={() => { handleNextTurn(Number(doctor?.id)) }} >
            <p className='my-1'>Avanzar turno</p>
          </button>
        </div>
      </div>
      {doctor?.turnos?.length === 0
        ? <div>
            <blockquote className="blockquote text-center">
              <p className='text-container'>¡ No tenés turnos asignados !</p>
            </blockquote>
          </div>
        : <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
            <thead className='table-success'>
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
                  <tr key={index} className={isFirstPatient ? 'table-warning' : ''}>
                    <th scope='row'>{turn.nro_orden}</th>
                    <td>{turn.nombre_paciente}</td>
                    <td>
                      <button 
                        type='button' 
                        className={isFirstPatient ? 'btn btn-sm px-4 btn-success' : 'btn btn-sm px-4 btn-outline-success'} 
                        onClick={() => { handleMotivo(turn.motivo_consulta?turn.motivo_consulta:" ") }}>
                      <p className='my-2'>Motivo</p>
                      </button>
                    </td>
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


