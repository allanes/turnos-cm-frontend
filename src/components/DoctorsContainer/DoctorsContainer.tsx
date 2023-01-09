import React, { useEffect, useState } from 'react'
import { Medico } from '../../codegen_output'
import { MedicosService } from '../../codegen_output'
import { DoctorsList } from './DoctorsList'

interface DoctorsState {
  doctors: Array<Medico>
}

export const DoctorsContainer = () => {

  const [doctorsList, setDoctorsList] = useState<DoctorsState["doctors"]>([])

  useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
    .then(doctors => {
      console.log(doctors);
      setDoctorsList(doctors)
    })
  }, [])

  const handleDelete = (id: number): void => {
    MedicosService.deleteMedicoApiV1DoctorsIdDelete(id)
    setDoctorsList(doctorsList.filter((doctor) => doctor.id !== id));
  }

  return (
    <>
      <DoctorsList doctorsList={doctorsList} onDeleteDoctor={handleDelete} />
    </>
  )
}
