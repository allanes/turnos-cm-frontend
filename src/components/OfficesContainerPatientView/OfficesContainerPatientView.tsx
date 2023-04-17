import { useEffect, useState } from 'react'
import { OfficesDescription } from './OfficesDescription'
import { ConsultorioDetallado, ConsultoriosService } from '../../codegen_output'
import { useParams } from 'react-router-dom'

interface OfficesState {
  offices: Array<ConsultorioDetallado>
  queryParams: string | undefined
}

export const OfficesContainerPatientView = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const { query } = useParams()

  useEffect(() => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(query)
      .then(offices => {
        console.log(offices)
        setOfficesList(offices)
      })
  }, [query])

  return (
    <>
      <OfficesDescription officesList={officesList} />
    </>
  )
}
