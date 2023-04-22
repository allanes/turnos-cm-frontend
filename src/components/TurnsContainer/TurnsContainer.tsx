import React, { useEffect, useState } from 'react'
import { Medico, MedicosService, TurnoCreate } from '../../codegen_output'
import { Turno } from '../../codegen_output'
import { TurnosService } from '../../codegen_output'
import { TurnsCreate } from './TurnsCreate'
import { TurnsList } from './TurnsList'
import { Button } from 'react-bootstrap'

// import io from 'socket.io-client'
// import { PORT_SERVER } from '../../types/config'
// const socket = io(PORT_SERVER)

interface TurnsState {
  turns: Array<Turno>
  turnsCreate: Array<TurnoCreate>
  doctorsList: Array<Medico>
}

export const TurnsContainer = () => {

  const [turnsList, setTurnsList] = useState<TurnsState["turns"]>([])
  const [turnsCreateList, setTurnsCreateList] = useState<TurnsState["turnsCreate"]>([])
  const [doctorsList, setDoctorList] = useState<TurnsState["doctorsList"]>([])

  useEffect(() => {
    TurnosService.readTurnosApiV1TurnsGet()
      .then(turns => {
        console.log(turns)
        setTurnsList(turns)
      })
  }, [turnsCreateList])

  useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
      .then(doctors => {
        console.log(doctors);
        setDoctorList(doctors)
      })
  }, [])

  const handleNewTurn = (newTurn: TurnoCreate): void => {
    TurnosService.handleCreateTurnoApiV1TurnsPost(newTurn)
    console.log(newTurn);
    setTurnsCreateList(turn => [...turnsCreateList, newTurn])
    // socket.emit('newTurn', 'newTurn')
  }
  
  const handleDelete = (id: number): void => {
    TurnosService.deleteTurnoApiV1TurnsIdDelete(id)
    setTurnsList(turnsList.filter((turn) => turn.id !== id));
    // socket.emit('newTurn', 'newTurn')
  }

  return (
    <div>
      <TurnsCreate onNewTurn={handleNewTurn} doctorsList={doctorsList} />
      <TurnsList turnsList={turnsList} onDeleteTurn={handleDelete} />
    </div>
  )
}