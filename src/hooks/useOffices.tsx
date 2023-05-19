// hooks/useOffices.ts
import { useState, useEffect } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../codegen_output'

export const useOffices = (roomId: string) => {
  const [officesList, setOfficesList] = useState<Array<ConsultorioDetallado>>([])

  useEffect(() => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
      .then(offices => {
        setOfficesList(offices)
      })
  }, [roomId])

  return officesList
}
