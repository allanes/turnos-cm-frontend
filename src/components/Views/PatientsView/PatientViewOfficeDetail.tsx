import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ConsultorioDetallado } from '../../../codegen_output'

export const cardsToShow = 2;
export const patientsPerCard = 3

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

  const emptyCardCount = totalSlides * cardsToShow - officesList.length; // Number of empty cards needed on the last slide

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <Carousel activeIndex={activeSlide}>
            {[...Array(totalSlides)].map((_, slideIndex) => {
              return (
                <Carousel.Item key={slideIndex}>
                  {[...Array(cardsToShow)].map((_, cardIndex) => {
                    const officeIndex = slideIndex * cardsToShow + cardIndex;
                    const office = officesList[officeIndex];
                    const isLastSlide = slideIndex === totalSlides - 1;
                    const isEmptyCard = isLastSlide && cardIndex >= cardsToShow - emptyCardCount;

                    if(isEmptyCard){
                      return null;
                    }

                    return (
                      <div
                        key={officeIndex}
                        className={`cardRoom${
                          animationActive && office.id === consultorioId ? ' animation-active' : ''
                        }`}
                      >
                        {isEmptyCard ? null : (
                          <>
                            <div className="patient-cardRoom-Top">
                              <p className="h1">Dr/a. {office.medico}</p>
                              <p className="h3">Consultorio: {office.id}</p>
                            </div>
                            <div>
                              <table className="table table-striped table-hover table-xxl table-container-sm table-turns-container">
                                <tbody>
                                  {office.pacientes?.slice(0, patientsPerCard).map((turn, index) => {
                                    const isFirstPatient = index === 0;
                                    const patientClassName = isFirstPatient ? 'table-warning' : '';
                                    const patientTextStyle = isFirstPatient ? 'h2 font-weight-bold' : 'h3 text-muted';

                                    return (
                                      <tr key={index} className={patientClassName}>
                                        <th scope="row">
                                          <p className={`${patientTextStyle}`}>{turn.split(' ')[0]}</p>
                                        </th>
                                        <td className={`text-start ${patientTextStyle}`}>
                                          {turn.split(' ').slice(1).join(' ')}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                  {office.pacientes?.length &&
                                    office.pacientes.length > patientsPerCard && (
                                      <tr>
                                        <td colSpan={3} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#808080' }}>
                                          + {(office.pacientes?.length ?? 0) - patientsPerCard} pacientes
                                        </td>
                                      </tr>
                                    )}
                                </tbody>
                              </table>
                            </div>
                          </>
                        )}
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
};
