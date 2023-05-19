import React, { useState, useEffect, Fragment } from 'react'
import { ConsultorioDetallado, ConsultoriosService } from '../../../codegen_output'
import { PatientViewWaitingRoomList } from './PatientViewWaitingRoomList'
import { Consultorio } from '../../../codegen_output'

interface OfficesState {
	offices: Array<ConsultorioDetallado>
	waitingRoomList: Array<Consultorio>
}


export const PatientViewListContainer = () => {

  const [officesList, setOfficesList] = useState<OfficesState["offices"]>([])
  const [waitingRoomList, setWaitingRoomList] = useState<OfficesState["offices"]>([])

  const officesFilter = officesList.filter((office, indice, offices) => {
	return offices.findIndex(item => item.sala === office.sala) === indice;
  });

  useEffect(() => {
    ConsultoriosService.readConsultoriosApiV1OfficesGet()
      .then(offices => {
        console.log(offices)
        setOfficesList(offices)
      })
  }, [])

  useEffect(() => {
	setWaitingRoomList(officesFilter)
  }, [officesList])

	return (
		<>
		<div className='table-container-xxl text-center'>
			<p className='h5'>Seleccione una sala para ver los consultorios</p>
		</div>
		<PatientViewWaitingRoomList waitingRoomList={waitingRoomList} />
		</>
	)
}
