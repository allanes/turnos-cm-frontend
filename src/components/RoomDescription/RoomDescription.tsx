import React from 'react'

interface Props {
	roomsList: Array<{
		roomGroup: number
		roomSubGroup: string
		doctorName?: string
	}>
}

export const RoomDescription = ({ roomsList }: Props) => {

	const renderList = (): JSX.Element[] => {
		return roomsList.map((room, index) => {
			return (
				<li key={index}>
					<h1>{`Consultorio ${room.roomGroup}-${room.roomSubGroup}`}</h1>
					<h4><small>Dr. {room.doctorName} </small></h4>
				</li>
			)
		})
	}

	return (
		<div>
			<ul>
				{renderList()}
			</ul>
		</div>
	)
}

