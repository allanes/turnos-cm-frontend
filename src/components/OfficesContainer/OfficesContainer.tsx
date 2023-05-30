import { useEffect, useState } from "react"
import { OfficesList } from "./OfficesList"
import { ApiError, CancelablePromise, Consultorio, ConsultorioCreate, ConsultoriosService, MedicosService } from "../../codegen_output"
import { OfficesCreate } from "./OfficesCreate"
import { Medico } from "../../codegen_output"
import { OfficesWithDoctor } from "../../types/types"
import { AssignDoctorToOffice } from "./AssignDoctorToOffice"
import { RegistroConsultoriosCreate } from "../../codegen_output"
import { RegistroDeConsultoriosConMDicosService } from "../../codegen_output"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { ConsultorioDetallado } from "../../codegen_output"
import { RegistroConsultorios } from "../../codegen_output"

interface OfficesState {
  officesList: Array<Consultorio>
  doctorsList: Array<Medico>
  recordWithDoctor: Array<RegistroConsultorios>
  officesListWithDetails: Array<ConsultorioDetallado>
  officesCreate: Array<ConsultorioCreate>
  officesListWithDoctor: Array<OfficesWithDoctor>
  flag: Boolean
}

export const OfficesContainer = () => {

  const [officesList, setOfficesList] = useState<OfficesState["officesList"]>([])
  const [doctorsList, setDoctorsList] = useState<OfficesState["doctorsList"]>([])
  const [officesListCreate, setOfficesListCreate] = useState<OfficesState["officesCreate"]>([])
  const [officesListWithDetails, setOfficesListWithDetails] = useState<OfficesState["officesListWithDetails"]>([])
  const [error, setError] = useState(false);
  const [recordWithDoctor, setRecordWithDoctor] = useState<OfficesState["recordWithDoctor"]>([])
  const [refreshFlag, setRefreshFlag] = useState<OfficesState["flag"]>(true)



  useEffect(() => {
    ConsultoriosService.readConsultoriosApiV1OfficesGet()
      .then(offices => {
        setOfficesList(offices)
      })
      .catch(
        (error => {
          setError(error)
          console.log("ERROR")
        }
        )
      )
      .finally(
        () => console.log("Finish load Offices list")
      )
  }, [])

  useEffect(() => {
    RegistroDeConsultoriosConMDicosService.readRegistrosConsultoriosApiV1OfficesToDoctorsGet()
      .then(record => {
        setRecordWithDoctor(record)
      })
      .catch(
        (error => {
          setError(error)
          console.log("ERROR")
        }
        )
      )
      .finally(
        () => console.log("Finish load Record Offices list")
      )
  }, [refreshFlag])

  useEffect(() => {
    ConsultoriosService.readConsultoriosConDetallesApiV1OfficesWithDetailsGet()
      .then(officeWithDetails => {
        setOfficesListWithDetails(officeWithDetails)
      })
      .catch(
        (error => {
          setError(error)
          console.log("ERROR")
        }
        )
      )
      .finally(
        () => console.log("Finish load Offices list with details")
      )
  }, [])

  useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
      .then(doctors => {
        setDoctorsList(doctors)
      })
  }, [])

  const handleNewOffice = (newOffice: ConsultorioCreate): void => {
    ConsultoriosService.createConsultorioApiV1OfficesPost(newOffice)
    setOfficesListCreate(office => [...officesList, newOffice])
  }

  const handleDelete = (id: number): void => {
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el consultorio?',
      html: ``,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      icon: 'warning',
      confirmButtonColor: '#ff2d55'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Eliminado!', '', 'error')
        ConsultoriosService.deleteConsultorioApiV1OfficesIdDelete(id)
        setOfficesList(officesList.filter((offices) => offices.id !== id));
      }
    })
  }

  const handleNewAssign = async (newAssign: RegistroConsultoriosCreate): CancelablePromise<void> => {
    try {
      await RegistroDeConsultoriosConMDicosService.createRegistroConsultorioApiV1OfficesToDoctorsPost(newAssign)
      Swal.fire('Médico asignado al consultorio', '', 'success');
      setRefreshFlag(!refreshFlag)
    }
    catch (error) {
      const err = error as ApiError; // or a custom error type if you know the structure
      let errorMessage = 'An error occurred.'; // Start with the message property.

      if (err.body && err.body.detail) {
        // If the body property has a message property, add it to the error message.
        errorMessage = err.body.detail;
      }
      Swal.fire('Error', errorMessage, 'error');
    }
  }

  const handleReleaseOffice = (officeIdToRelease: RegistroConsultoriosCreate, turnsRemaining: number | undefined): void => {
    
    { turnsRemaining
      ? Swal.fire({
        title: '¿Estás seguro que deseas liberar el consultorio?',
        html: `Este consultorio ${turnsRemaining ? `tiene ${turnsRemaining}` : 'no tiene'} turnos asignados`,
        showCancelButton: true,
        confirmButtonText: 'Liberar',
        icon: 'warning',
        confirmButtonColor: '#ff2d55'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Consultorio liberado', '', 'success')
          RegistroDeConsultoriosConMDicosService.createRegistroConsultorioApiV1OfficesToDoctorsPost(officeIdToRelease)
          setRecordWithDoctor(recordWithDoctor.filter((record) => record.id_consultorio !== officeIdToRelease.id_consultorio));
        }
      })

      : Swal.fire('Error', 'El consultorio no tiene asignado un médico', 'error');
    }
  }

  return (
    <>
      <AssignDoctorToOffice officesList={officesList} doctorsList={doctorsList} onNewAssign={handleNewAssign} />
      <OfficesList officesList={officesList} doctorsList={doctorsList} recordWithDoctor={recordWithDoctor} 
                   officesListWithDetails={officesListWithDetails} onDeleteOffice={handleDelete} 
                   onRelease={handleReleaseOffice} />
      <OfficesCreate onNewOffice={handleNewOffice} />
    </>
  )
}
