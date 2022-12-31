import React, { useEffect, useState } from 'react'
import { roomsList_initial_states } from '../../services/roomsList_initial_states'
import { RoomDescription } from './RoomDescription'
import { Room } from '../../types/types'

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
      <RoomDescription roomsList={roomsList} />
    </>
  )
}
