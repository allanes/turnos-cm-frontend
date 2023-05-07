import React from 'react'
import { useEffect, useState } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'


interface OfficesState {
  officesList: Array<ConsultorioDetallado>
}

export const PatientViewOfficeDetail = ({ officesList }: OfficesState) => {

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <div className="cardRoom-container">
            {officesList.map((office) => {
              return (
                <div key={office.id} className='cardRoom'>
                  <div className='cardRoom-Top'>
                    <p className='h1'>{office.medico}</p>
                    <p>Consultorio: {office.id}</p>
                  </div>
                  <div>
                    <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
                      <tbody>
                        {office.pacientes?.map((turn, index) => {
                          const isFirstPatient = index === 0;
                          return (
                            <tr key={index} className={isFirstPatient ? 'table-warning' : ''}>
                              <th scope='row'><p className='mt-2'>{index + 1}</p></th>
                              <td className='h2 text-start'>{turn}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}