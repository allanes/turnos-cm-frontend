import React from 'react'
import { useEffect, useState } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { useParams } from 'react-router-dom'
import { PatientViewList } from './PatientViewList'

interface OfficesState {
  offices: Array<ConsultorioDetallado>
  queryParams: string | undefined
}

export const PatientView = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const { query } = useParams()

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
