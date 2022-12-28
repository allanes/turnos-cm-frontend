import React, { useEffect, useState } from 'react'
import { roomsList_initial_states } from '../../services/roomsList_initial_states'

interface Room {
  roomGroup: number
  roomSubGroup: string
  doctorName?: string
}

interface RoomState {
  rooms: Array<Room>
}

export const RoomContainer = () => {

  const [roomsList, setRoomsList] = useState<RoomState["rooms"]>([])

  useEffect(() => {
    setRoomsList(roomsList_initial_states)
  }, [])

  return (
    <>
      <div>RoomContainer</div>
      <ul>
        {
          roomsList.map((room, index) => {
            return (
              <li key={index}>
                <h1>{`Consultorio ${room.roomGroup}-${room.roomSubGroup}`}</h1>
                <h4><small>{room.doctorName}</small></h4>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
