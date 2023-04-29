import React from 'react'
import { Medico } from '../../../codegen_output'
import { Link } from 'react-router-dom'

interface Props {
	doctorsList: Array<Medico>
}

export const DoctorsViewList = ({ doctorsList }: Props) => {
	return (
		<div>
			<ul className='p-1 wihtout-style'>
				{doctorsList.map((doctor) => {
					return (
						<Link className='wihtout-style' key={doctor.id} to={`/doctorsView/${doctor.id}`}>
							<li className='text-container wihtout-style color-mi-black h2 px-4'>
								{doctor.nombre}, {doctor.apellido}</li>
						</Link>
					)
				})}
			</ul>
		</div>
	)
}
