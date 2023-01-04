import React from 'react'
import { Patient } from '../../types/types'


interface Props {
	patientsList: Patient[]
}

export const PatientList = ({ patientsList }: Props) => {
	return (
		<div className='container-xxl' >
			<div className="mi-container-flex">
				{patientsList.map((patient) => {
					return (
						<div className=' mi-patient-card mi-border' key={patient.dni}>
							<h3>{patient.patientName}, {patient.patientSurName}</h3>
							<small>{patient.email}</small>
						</div>
					)
				})}
			</div>
		</div>
	)
}
