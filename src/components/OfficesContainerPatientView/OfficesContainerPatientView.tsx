import { useEffect, useState } from 'react'
import { OfficesDescription } from './OfficesDescription'

import { ConsultorioDetallado, ConsultoriosService } from '../../codegen_output'

interface OfficesState {
  offices: Array<ConsultorioDetallado>
}

export const OfficesContainerPatientView = () => {

    const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])

    useEffect(() => {
      ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet()
      .then(offices => {
        console.log(offices);
        setOfficesList(offices)
      })
    }, [])
    
    return (
      <>
        <OfficesDescription officesList={officesList} />
      </>
    )
  }
  