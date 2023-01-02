import React from 'react'
import { RoomPatientsList } from './RoomPatientsList'
import { Room } from '../../types/types'

interface Props {
	roomsList: Array<Room>
}

export const RoomDescription = ({ roomsList }: Props) => {

	return (
		<div className='container-md text-center my-4'>
			<div className='container'>
				<div className="row g-5">
					{roomsList.map((room, index) => {
						return (
							<div className='col-12 col-md-6 col-xxl-4' key={index}>
								<div className='cardRoom'>
									<div className='cardRoom-Top'>
										<h1 className='text-white'>{`Consultorio ${room.roomGroup}-${room.roomSubGroup}`}</h1>
										<h4><small>Dr. {room.doctorName} </small></h4>
									</div>
									<div>
										<RoomPatientsList patientsList={room.patientsList} /> 
									</div>
									<div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

