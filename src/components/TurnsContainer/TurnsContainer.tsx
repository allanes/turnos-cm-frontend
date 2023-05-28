import React, { useEffect, useState } from 'react'
import { Medico, MedicosService, TurnoCreate } from '../../codegen_output'
import { Turno } from '../../codegen_output'
import { TurnosService } from '../../codegen_output'
import { TurnsCreate } from './TurnsCreate'
import { TurnsList } from './TurnsList'
import { Paciente } from '../../codegen_output'
import { PacientesService } from '../../codegen_output'

// import io from 'socket.io-client'
// import { PORT_SERVER } from '../../types/config'
// const socket = io(PORT_SERVER)

interface TurnsState {
  turns: Array<Turno>
  turnsCreate: Array<TurnoCreate>
  doctorsList: Array<Medico>
  patients: Array<Paciente>
}

export const TurnsContainer = () => {

  const [turnsList, setTurnsList] = useState<TurnsState["turns"]>([])
  const [turnsCreateList, setTurnsCreateList] = useState<TurnsState["turnsCreate"]>([])
  const [doctorsList, setDoctorList] = useState<TurnsState["doctorsList"]>([])
  const [patientsList, setPatientsList] = useState<TurnsState["patients"]>([])

  useEffect(() => {
    TurnosService.readTurnosApiV1TurnsGet()
      .then(turns => {
        setTurnsList(turns)
      })
  }, [turnsCreateList])

  useEffect(() => {
    MedicosService.readMedicosApiV1DoctorsGet()
      .then(doctors => {
        setDoctorList(doctors)
      })
  }, [])

  useEffect(() => {
    PacientesService.readPacientesApiV1PatientsGet()
    .then(patients => {
      setPatientsList(patients)
    })
  }, [])

  const handleNewTurn = (newTurn: TurnoCreate): void => {
    TurnosService.createTurnoApiV1TurnsPost(newTurn)
    setTurnsCreateList(turn => [...turnsCreateList, newTurn])
  }
  
  const handleDelete = (id: number): void => {
    TurnosService.deleteTurnoApiV1TurnsIdDelete(id)
    setTurnsList(turnsList.filter((turn) => turn.id !== id));
  }

  return (
    <div>
      <TurnsCreate onNewTurn={handleNewTurn} doctorsList={doctorsList} />
      <TurnsList doctorsList={doctorsList} patientsList={patientsList} turnsList={turnsList} onDeleteTurn={handleDelete} />
    </div>
  )
}