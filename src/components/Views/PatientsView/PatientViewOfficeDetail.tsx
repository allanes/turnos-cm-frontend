import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ConsultorioDetallado } from '../../../codegen_output'

export const cardsToShow = 3;
export const patientsPerCard = 2

interface OfficesState {
  officesList: Array<ConsultorioDetallado>
  consultorioId: number;
  animationActive: boolean;
  activeSlide: number;
}

export const handleRefresh = (
  officesList: Array<ConsultorioDetallado>, 
  consultorioId: number,
  setAnimationActive: Function) => {
    if (officesList.some((office) => office.id === consultorioId)) {
      setAnimationActive(true);
      setTimeout(() => setAnimationActive(false), 5000);
    }
};

export const PatientViewOfficeDetail = ({ 
  officesList, 
  consultorioId, 
  animationActive, 
  activeSlide
}: OfficesState) => {
  console.log('Rendering PatientViewOfficeDetail with activeSlide:', activeSlide);

  const totalSlides = Math.ceil(officesList.length / cardsToShow);

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <Carousel activeIndex={activeSlide }>
            {[...Array(totalSlides)].map((_, slideIndex) => {
              return (
                <Carousel.Item key={slideIndex}>
                  {[...Array(cardsToShow)].map((_, cardIndex) => {
                    const officeIndex = (slideIndex * cardsToShow + cardIndex) % officesList.length;
                    const office = officesList[officeIndex];
                    
                    return (
                      <div key={office.id} className={`cardRoom${animationActive && office.id === consultorioId ? " animation-active" : ""}`}>
                        <div className='cardRoom-Top'>
                          <p className='h1'>Dr. {office.medico}</p>
                          <p>Consultorio: {office.id}</p>
                        </div>
                        <div>
                          <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
                            <tbody>
                              {office.pacientes?.slice(0, patientsPerCard).map((turn, index) => {
                                const isFirstPatient = index === 0;
                                return (
                                  <tr key={index} className={isFirstPatient ? 'table-warning' : ''}>
                                    <th scope='row'><p className='mt-2'>{index + 1}</p></th>
                                    <td className='h2 text-start'>{turn}</td>
                                  </tr>
                                );
                              })}
                              {office.pacientes?.length && office.pacientes.length > patientsPerCard &&
                                <tr>
                                  <td colSpan={3} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#808080' }}>
                                    + {(office.pacientes?.length ?? 0) - patientsPerCard} pacientes
                                  </td>
                                </tr>
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    );
                  })}
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}