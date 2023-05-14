import React from 'react'
import { useEffect, useState } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'


interface OfficesState {
  officesList: Array<ConsultorioDetallado>
  consultorioId: number;
  animationActive: boolean;
  carouselRef: React.RefObject<HTMLDivElement>; // add this line
}

// export const [animationActive, setAnimationActive] = useState(false);

export const handleRefresh = (
  officesList: Array<ConsultorioDetallado>, 
  consultorioId: number,
  setAnimationActive: Function,
  carouselRef: React.RefObject<HTMLDivElement>) => {
    const targetIndex = Math.floor(officesList.findIndex((office) => office.id === consultorioId) / 3) * 3;
    if (carouselRef.current) {
      carouselRef.current.scrollTop = targetIndex * (window.innerHeight / 3);
    }
    setAnimationActive(true);
    setTimeout(() => setAnimationActive(false), 5000);
  }
    // // Check if the refresh event is targeting this consultorio
    // if (officesList.some((office) => office.id === consultorioId)) {
    //   console.log('setAnimationActive called')
    //   setAnimationActive(true);
    //   // Stop the animation after 5 seconds
    //   setTimeout(() => setAnimationActive(false), 5000);
    // }
// };

export const PatientViewOfficeDetail = ({ officesList, consultorioId, animationActive }: OfficesState) => {
  const itemsToShow = 3;
  const totalSlides = Math.ceil(officesList.length / itemsToShow);

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
              {[...Array(totalSlides)].map((_, slideIndex) => {
                const isActive = slideIndex === 0; // Make the first slide active
                return (
                  <div key={slideIndex} className={`carousel-item${isActive ? ' active' : ''}`}>
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
