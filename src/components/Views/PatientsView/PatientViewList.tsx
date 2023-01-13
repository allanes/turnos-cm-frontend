import React from 'react'
import { ConsultorioDetallado } from '../../../codegen_output'
import { PatientViewTurns } from './PatientViewTurns'

interface Props {
  officesList: Array<ConsultorioDetallado>
}

export const PatientViewList = ({ officesList }: Props) => {

  return (
    <>
      <div className='container-xxl text-center my-4'>
        <div className='container-fluid'>
          <div className="row g-5">
            {officesList.map((office, index) => {
              return (
                <div className='col-12 col-md-6 col-xxl-4' key={index}>
                  <div className='cardRoom'>
                    <div className='cardRoom-Top'>
                      <h1 className='text-white'>Consultorio {office.numero}</h1>
                      <h4><small>Dr. {office.medico} </small></h4>
                    </div>
                    <div>
                      <PatientViewTurns turnsList={office.pacientes} /> 
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

