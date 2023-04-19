import React from 'react'
import { Medico } from '../../../codegen_output'

interface Props {
	doctorsList: Array<Medico>
}

export const DoctorsViewList = ({ doctorsList }: Props) => {
	return (
		<div>
			<ul className='p-1'>
				{doctorsList.map((doctor, index) => {
					return (
						<li className='card-container' key={index}>{doctor.nombre}, {doctor.apellido} - {doctor.especialidad}</li>
					)
				})}
			</ul>
		</div>
	)
}
