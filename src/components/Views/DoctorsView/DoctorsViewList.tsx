import React from 'react'
import { Medico } from '../../../codegen_output'
import { Link } from 'react-router-dom'

interface Props {
	doctorsList: Array<Medico>
}

export const DoctorsViewList = ({ doctorsList }: Props) => {
	return (
		<div>
			<ul className='p-1'>
				{doctorsList.map((doctor) => {
					return (
						<Link key={doctor.id} to={`/doctorsView/${doctor.id}`}>
							<li className='card-container'>{doctor.nombre}, {doctor.apellido} - {doctor.especialidad}</li>
						</Link>
					)
				})}
			</ul>
		</div>
	)
}
