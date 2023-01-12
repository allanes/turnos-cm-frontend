import { useEffect, useState } from "react"
import { OfficesList } from "./OfficesList"
import { Consultorio, ConsultorioCreate, ConsultoriosService, MedicosService } from "../../codegen_output"
import { OfficesCreate } from "./OfficesCreate"
import { Medico } from "../../codegen_output"
import { OfficesWithDoctor } from "../../types/types"


interface OfficesState {
  offices: Array<Consultorio>
  officesCreate: Array<ConsultorioCreate>
  doctorsList: Array<Medico>
  officesListWithDoctor: Array<OfficesWithDoctor>
}

export const OfficesContainer = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const [officesListCreate, setOfficesListCreate] = useState<OfficesState["officesCreate"]>([])
  const [doctorsList, setDoctorsList] = useState<OfficesState["doctorsList"]>([])
  const [offices, setOffices] = useState<OfficesState["officesListWithDoctor"]>([])


  useEffect(() => {
    ConsultoriosService.readConsultoriosApiV1OfficesGet()
    .then(offices => {
      console.log(offices)
      setOfficesList(offices)
    })
  }, [])

  useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
    .then(doctors => {
      console.log(doctors)
      setDoctorsList(doctors)
    })
  }, [])

  useEffect(() => {
    setOffices(
      officesList.map(office => ({
        ...office,
        medico: doctorsList.find((doctor) => doctor.consultorio === office.descripcion)
      })
      )
    )
  }, [officesList])

  const handleNewOffice = (newOffice: ConsultorioCreate): void => {
    ConsultoriosService.createConsultorioApiV1OfficesPost(newOffice)
    console.log(newOffice);
    setOfficesListCreate( office => [...officesList, newOffice])
    
  }

  const handleDelete = (id: number): void => {
    ConsultoriosService.deleteConsultorioApiV1OfficesIdDelete(id)
    setOfficesList(officesList.filter((offices) => offices.id !== id));
  }
  
  return (
    <>
      <OfficesCreate onNewOffice={handleNewOffice} />
      <OfficesList offices={offices} onDeleteOffice={handleDelete} doctorsList={doctorsList} />
    </>
  )
}
