import React from 'react'
import { useEffect, useState } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { useParams } from 'react-router-dom'
import { PatientViewOfficeDetail } from './PatientViewOfficeDetail'
import { PORT_SERVER } from '../../../types/config'
import io from 'socket.io-client'

const socket = io(PORT_SERVER)

interface OfficesState {
  offices: Array<ConsultorioDetallado>
}

export const PatientViewOfficeList = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const { roomId } = useParams()

  useEffect(() => {
    socket.on('refresh', (msg) => {
      console.log(msg)
      window.location.reload()
    })
    return () => {
      socket.off('refresh')
    }
  }, [])

  useEffect(() => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
      .then(offices => {
        console.log(offices)
        setOfficesList(offices)
      })
  }, [roomId])

  return (
    <div>
      <div className="container-fluid text-center">
        <div className="row align-items-center">
          <div className="col-6">
            <h2 className='my-0'>Aqui se inserta la publicidad</h2>
          </div>
          <div className="col-6">
            <PatientViewOfficeDetail officesList={officesList} />
          </div>
        </div>
      </div>
    </div>
  )
}

