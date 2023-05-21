// hooks/useOffices.ts
import { useState, useEffect, useRef } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../codegen_output'

export const useOffices = (roomId: string) => {
  const [officesList, setOfficesList] = useState<Array<ConsultorioDetallado>>([])
  const refreshOfficesRef = useRef<() => void>(() => {})

  const fetchOffices = () => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet(roomId)
      .then(offices => {
        setOfficesList(offices)
      })
  }

  useEffect(() => {
    fetchOffices()
  }, [roomId])

  refreshOfficesRef.current = fetchOffices

  return { officesList, refreshOffices: refreshOfficesRef.current }
}
