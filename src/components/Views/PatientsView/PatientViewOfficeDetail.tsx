import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { ConsultorioDetallado } from '../../../codegen_output'

interface OfficesState {
  officesList: Array<ConsultorioDetallado>
  consultorioId: number;
  animationActive: boolean;
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

export const PatientViewOfficeDetail = ({ officesList, consultorioId, animationActive }: OfficesState) => {
  const itemsToShow = 3;
  const totalSlides = Math.ceil(officesList.length / itemsToShow);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <Carousel activeIndex={activeIndex}>
            {[...Array(totalSlides)].map((_, slideIndex) => {
              return (
                <Carousel.Item key={slideIndex}>
                  {[...Array(itemsToShow)].map((_, cardIndex) => {
                    const officeIndex = (slideIndex * itemsToShow + cardIndex) % officesList.length;
                    const office = officesList[officeIndex];
                    const numPatientsLeft = (office.pacientes?.length ?? 0) - 3;
                    return (
                      <div key={office.id} className={`cardRoom${animationActive && office.id === consultorioId ? " animation-active" : ""}`}>
                        <div className='cardRoom-Top'>
                          <p className='h1'>Dr. {office.medico}</p>
                          <p>Consultorio: {office.id}</p>
                        </div>
                        <div>
                          <table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
                            <tbody>
                              {office.pacientes?.slice(0, 3).map((turn, index) => {
                                const isFirstPatient = index === 0;
                                return (
                                  <tr key={index} className={isFirstPatient ? 'table-warning' : ''}>
                                    <th scope='row'><p className='mt-2'>{index + 1}</p></th>
                                    <td className='h2 text-start'>{turn}</td>
                                  </tr>
                                );
                              })}
                              {office.pacientes?.length && office.pacientes.length > 3 &&
                                <tr>
                                  <td colSpan={3} style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: '#808080' }}>
                                    + {(office.pacientes?.length ?? 0) - 3} pacientes
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