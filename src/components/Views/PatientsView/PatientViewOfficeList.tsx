import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { useParams } from 'react-router-dom'
import { PatientViewOfficeDetail, handleRefresh, cardsToShow } from './PatientViewOfficeDetail'
import { PORT_SERVER } from '../../../types/config'
import io from 'socket.io-client'
import { CarouselItem } from './CarouselItem'

const socket = io(PORT_SERVER)

interface OfficesState {
  offices: Array<ConsultorioDetallado>;
  consultorioId: number;
  animationActive: boolean;
}

export const PatientViewOfficeList = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const [consultorioId, setConsultorioId] = useState<OfficesState["consultorioId"]>(0);
  const [animationActive, setAnimationActive] = useState<OfficesState["animationActive"]>(false);
  const { roomId } = useParams()
  const audio = new Audio();
  audio.src = 'http://localhost:8000/notification'
  const [activeSlide, setActiveSlide] = useState(0);
  const setActiveSlideRef = useRef<React.Dispatch<React.SetStateAction<number>> | null>(null);
  const timerRef = useRef<number | null>(null);
  const [restartTimer, setRestartTimer] = useState(false);


  const findSlideForOffice = (offices: Array<ConsultorioDetallado>, consultorioId: number) => {
    const officeIndex = offices.findIndex((office) => office.id === consultorioId);

    if (officeIndex === -1) {
      console.log(`Office with id ${consultorioId} not found`);
      return 0;  // Default to the first slide if office not found
    }

    return Math.floor(officeIndex / cardsToShow);
  };

  useEffect(() => {
    console.log('activeSlide actualizada desde officelist:', activeSlide);
    setActiveSlideRef.current = setActiveSlide;
  }, [activeSlide, setActiveSlideRef]);

  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const totalSlides = Math.ceil(officesList.length / cardsToShow);

    timerRef.current = window.setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  // }, [officesList.length, setActiveSlide]);

}, [officesList.length, restartTimer]);

  const refreshOffices = (consultorioIdStr: string) => {
    setRestartTimer((prev) => !prev);

    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
    .then(offices => {
      const consul_recibido = parseInt(consultorioIdStr, 10)
      setConsultorioId(consul_recibido);
      handleNewMessage()
      handleRefresh(offices, consul_recibido, setAnimationActive)
      setOfficesList(offices)
      const newActiveSlide = findSlideForOffice(offices, consul_recibido);
      console.log('nueva slide activa: ' + newActiveSlide)
      console.log('handleRefresh called with ' + consultorioIdStr)
      setActiveSlide(newActiveSlide);
      
    })}

  useEffect(() => {
    socket.on('refresh', refreshOffices)
    return () => {
      socket.off('refresh')
    }
  }, [])

  useEffect(() => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
      .then(offices => {
        setOfficesList(offices)
      })
  }, [roomId])

  const handleNewMessage = () => {
    audio.play()
    console.log(audio.duration);
    
   };

   console.log('Rendering PatientViewOfficeList with activeSlide:', activeSlide);
  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <PatientViewOfficeDetail 
            officesList={officesList} 
            consultorioId={consultorioId} 
            animationActive={animationActive}
            activeSlide={activeSlide}
          />
          </div>
        </div>
      </div>
  )
}