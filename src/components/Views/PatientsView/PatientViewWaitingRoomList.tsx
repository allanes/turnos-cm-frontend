import React from 'react'
import { Link } from 'react-router-dom'
import { Consultorio } from '../../../codegen_output'

interface Props {
	waitingRoomList: Array<Consultorio>
}


export const PatientViewWaitingRoomList = ({ waitingRoomList }: Props) => {

	return (
		<div>
			<ul className='p-1 wihtout-style'>
				{waitingRoomList.map((room) => {
					return (
						<Link className='wihtout-style' key={room.sala} to={`/patientsView/${room.sala}`}>
							<li className='text-container wihtout-style color-mi-black h2 px-4'>Sala de espera: {room.sala}</li>
						</Link>
					)
				})}
			</ul>
		</div>
	)
}