import { useEffect, useState } from "react"
import { OfficesList } from "./OfficesList"
import { Consultorio, ConsultoriosService } from "../../codegen_output"
import { OfficesCreate } from "./OfficesCreate"

interface OfficesState {
  offices: Array<Consultorio>
}

export const OfficesContainer = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])

  useEffect(() => {
    ConsultoriosService.readConsultoriosApiV1OfficesGet()
    .then(offices => {
      console.log(offices)
      setOfficesList(offices)
    })
  }, [])

  const handleNewOffice = (newOffice: Consultorio): void => {
    ConsultoriosService.createConsultorioApiV1OfficesPost(newOffice)
    console.log(newOffice);
    setOfficesList( office => [...officesList, newOffice])
    
  }

  const handleDelete = (id: number): void => {
    ConsultoriosService.deleteConsultorioApiV1OfficesIdDelete(id)
    setOfficesList(officesList.filter((offices) => offices.id !== id));
  }
  
  return (
    <>
      <OfficesCreate onNewOffice={handleNewOffice} />
      <OfficesList officesList={officesList} onDeleteOffice={handleDelete} />
    </>
  )
}
