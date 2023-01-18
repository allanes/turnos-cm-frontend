import React from 'react'
import { useEffect, useState } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { useParams } from 'react-router-dom'
import { PatientViewList } from './PatientViewList'

import io from 'socket.io-client'
import { PORT_SERVER } from '../../../types/config'
const socket = io('http://192.168.100.117:4000')

interface OfficesState {
  offices: Array<ConsultorioDetallado>
  queryParams: string | undefined
}

export const PatientView = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const { query } = useParams()

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
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet('2')
      .then(offices => {
        console.log(offices)
        setOfficesList(offices)
      })
  }, [query])

  return (
    <>
      <PatientViewList officesList={officesList} />
    </>
  )
}
