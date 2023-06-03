import React from 'react'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { PatientViewOfficeDetail, handleRefresh, cardsToShow } from './PatientViewOfficeDetail'
import { Toast, notifyNextTurn } from './ToastContainer';
import { useOffices } from '../../../hooks/useOffices'
import { useSocket } from '../../../hooks/useSocket'
import { useAudio } from '../../../hooks/useAudio'
import { PORT_SERVER } from '../../../types/config'
import 'react-toastify/dist/ReactToastify.css';


interface OfficesState {
  offices: Array<ConsultorioDetallado>;
  consultorioId: number;
  animationActive: boolean;
}

const findSlideForOffice = (offices: Array<ConsultorioDetallado>, consultorioId: number) => {
  const officeIndex = offices.findIndex((office) => office.id === consultorioId);

  if (officeIndex === -1) {
    console.log(`Office with id ${consultorioId} not found`);
    return 0;  // Default to the first slide if office not found
  }

  return Math.floor(officeIndex / cardsToShow);
};

export const PatientViewOfficeList = () => {

  // const [_, setOfficesList] = useState<OfficesState["offices"]>([])
  const [consultorioId, setConsultorioId] = useState<OfficesState["consultorioId"]>(0);
  const [animationActive, setAnimationActive] = useState<OfficesState["animationActive"]>(false);
  const { roomId = "" } = useParams<{ roomId: string }>()
  const {officesList, refreshOffices} = useOffices(roomId) // Use the hook
  const [activeSlide, setActiveSlide] = useState(0);
  const setActiveSlideRef = useRef<React.Dispatch<React.SetStateAction<number>> | null>(null);
  const timerRef = useRef<number | null>(null);
  const [restartTimer, setRestartTimer] = useState(false);
  const { play } = useAudio(`${PORT_SERVER}/notification`);


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
  }, [officesList.length, restartTimer]);

  const handlePatientTurnEvent = useCallback((mensajeRecibido: string) => {
    const consulRecibidoStr = mensajeRecibido.split(";")[0]
    const nombrePacienteStr = mensajeRecibido.split(";")[1]
    const consultorioId = parseInt(consulRecibidoStr, 10)
    
    refreshOffices()
    setRestartTimer((prev) => !prev);

    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
    .then(offices => {      
      setConsultorioId(consultorioId);
      play()
      
      notifyNextTurn(nombrePacienteStr, consulRecibidoStr, offices)
      handleRefresh(offices, consultorioId, setAnimationActive)
      
      const newActiveSlide = findSlideForOffice(offices, consultorioId);
      setActiveSlide(newActiveSlide);      
    })
  }, [])

  const handleCreatedTurnEvent = useCallback((mensajeRecibido: string) => {
    const consultorioId = parseInt(mensajeRecibido, 10)
    
    refreshOffices()
    
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
    .then(offices => {      
      setConsultorioId(consultorioId);
    })
  }, [])

  const handleOfficeChangeEvent = useCallback((consultorioId: string) => {
    refreshOffices()    
  }, [])
    
  useSocket('patient-turn', handlePatientTurnEvent)
  useSocket('created-turn', handleCreatedTurnEvent)
  useSocket('new-office', handleOfficeChangeEvent)

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
        <Toast />        
      </div>
  )
}
