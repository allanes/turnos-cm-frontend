import React, { useState, useEffect, Fragment } from 'react'
import { Medico } from '../../../codegen_output'
import { MedicosService } from '../../../codegen_output'
import { DoctorsViewList } from './DoctorsViewList'

interface DoctorsListState {
	doctorsList: Array<Medico>
}


export const DoctorsViewListContainer = () => {

	const [doctorsList, setDoctorsList] = useState<DoctorsListState["doctorsList"]>([])

	useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
    .then(doctors => {
      console.log(doctors)
      setDoctorsList(doctors)
    })
  }, [])

	return (
		<>
		<div className='table-container-xxl text-center'>
			<p className='h5'>Seleccione su identidad para controlar la lista de turnos</p>
		</div>
			< DoctorsViewList doctorsList={doctorsList} />
		</>
	)
}
