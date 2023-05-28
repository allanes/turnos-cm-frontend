import React, { useEffect, useState } from 'react'
import { Medico } from '../../codegen_output'
import { MedicosService } from '../../codegen_output'
import { DoctorsList } from './DoctorsList'
import { DoctorsCreate } from './DoctorsCreate'
import Swal from 'sweetalert2'

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

  const handleNewDoctor = (newDoctor: Medico): void => {
    MedicosService.createMedicoApiV1DoctorsPost(newDoctor)
    console.log(newDoctor);
    setDoctorsList( doctor => [...doctorsList, newDoctor])
  } 

  const handleDelete = (doctorToDelete: Medico): void => {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el médico?',
      html: `${doctorToDelete.nombre}, ${doctorToDelete.apellido}`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      icon: 'warning',
      confirmButtonColor: '#ff2d55'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'error')
        MedicosService.deleteMedicoApiV1DoctorsIdDelete(doctorToDelete.id)
        setDoctorsList(doctorsList.filter((doctor) => doctor.id !== doctorToDelete.id));
      }
    })
  }

  return (
    <>
      <DoctorsCreate onNewDoctor={handleNewDoctor} />
      <DoctorsList doctorsList={doctorsList} onDeleteDoctor={handleDelete} />
    </>
  )
}
