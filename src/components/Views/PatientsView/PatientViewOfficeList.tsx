import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { useParams } from 'react-router-dom'
import { PatientViewOfficeDetail, handleRefresh } from './PatientViewOfficeDetail'
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

  useEffect(() => {
    socket.on('refresh', (consultorioIdStr) => {
      ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
        .then(offices => {
          setOfficesList(offices)
          setConsultorioId(parseInt(consultorioIdStr, 10));
          handleNewMessage()
          handleRefresh(offices, parseInt(consultorioIdStr,10), setAnimationActive)
          console.log('handleRefresh called with ' + consultorioIdStr)
        })
    })
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


  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <PatientViewOfficeDetail officesList={officesList} consultorioId={consultorioId} animationActive={animationActive}/>
          </div>
        </div>
      </div>
  )
}