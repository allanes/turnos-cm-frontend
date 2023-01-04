import { useEffect, useState } from 'react'
import { OfficesDescription } from './OfficesDescription'

import { ConsultorioDetallado } from '../../codegen_output'

interface OfficesState {
  offices: Array<ConsultorioDetallado>
}

export const OfficesContainer = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/offices/with-details?skip=0&limit=100')
      .then(res => res.json())
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
