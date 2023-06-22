import React, { useEffect, useState } from 'react'
import { Medico, MedicosService, ApiError, CancelablePromise } from '../../codegen_output'
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

  const handleNewDoctor = async (newDoctor: Medico): CancelablePromise<void> => {
    try {
      await MedicosService.createMedicoApiV1DoctorsPost(newDoctor)
      Swal.fire(
        `${newDoctor.nombre}, ${newDoctor.apellido}`,
        'ha sido guardado con éxito',
        'success'
      )
      setDoctorsList( doctor => [...doctorsList, newDoctor])
    } catch (error){
      const err = error as ApiError; // or a custom error type if you know the structure
      let errorMessage = 'An error occurred.'; // Start with the message property.

      if (err.body && err.body.detail) {
        // If the body property has a message property, add it to the error message.
        errorMessage = err.body.detail;
      }
      Swal.fire('Error', errorMessage, 'error');
    }
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
