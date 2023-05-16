import React, { useRef, useState } from 'react'
import { PacienteInDB, PacientesService, TurnoCreate } from '../../codegen_output'
import useNewTurnForm from '../../hooks/useNewTurnsForm'
import { Medico } from '../../codegen_output'
import editIcon from '../../assets/icons/outline_edit_white_24dp.png'
import Swal from 'sweetalert2'
import { Row, Col, Button, Form } from 'react-bootstrap'

interface Props {
  onNewTurn: (newPatient: TurnoCreate) => void
  doctorsList: Array<Medico>
}

interface TurnsCreateState {
  patientList: Array<PacienteInDB>
  patientSelected: PacienteInDB
  idToSearch: number
}

const INITIAL_STATE = {
  id: 1,
  nombre: "Nombre",
  apellido: "Apellido",
  fecha_nacimiento: "1990-01-01",
  email: "email@gmail.com",
  telefono: "0381",
}

const keysTabPatients = [
  "Id",
  "Nombre",
  "Apellido",
  "Email",
  "Telefono",
  "Turnos"
]

export const TurnsCreate = ({ onNewTurn, doctorsList }: Props) => {

  const [inputValues, dispatch] = useNewTurnForm()
  const formRef = useRef<HTMLFormElement>(null)
  const formSearchRef = useRef<HTMLFormElement>(null)

  const [patientsList, setPatientsList] = useState<TurnsCreateState["patientList"]>([])
  const [patientId, setPatientId] = useState<TurnsCreateState["idToSearch"]>(0)
  const [patientSelected, setPatientSelected] = useState<TurnsCreateState["patientSelected"]>(INITIAL_STATE)

  const handlePatientSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target
    console.log(id, +value);
    setPatientId(parseInt(value))
  }

  const handleSelectedPatient = (patientSelected: TurnsCreateState["patientSelected"]) => {
    setPatientSelected(patientSelected)
    const id = "id_paciente"
    const value = `${patientSelected.id}`

    dispatch({
      type: "change_value",
      payload: {
        inputName: id,
        inputValue: value
      }
    })
  }

  const handlePatientSearchSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    PacientesService.readPacienteApiV1PatientsIdGet(patientId)
      .then(patients => {
        console.log(patients)
        setPatientsList([patients])
      })
    formSearchRef.current?.reset()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = evt.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: id,
        inputValue: value
      }
    })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewTurn(inputValues)
    formRef.current?.reset()
    handleClear()
    Swal.fire(
      '',
      'El turno ha sido guardado con éxito',
      'success'
    )
  }

  const handleClear = () => {
    setPatientSelected(INITIAL_STATE)
    setPatientsList([])
  }

  return (
    <>
      <div className='table-container-xl'>
        <div className='table-container-l text-center mb-5'>
          <p className='h3'>Crear un nuevo turno</p>
        </div>
        <div>
          <Form ref={formSearchRef} onSubmit={handlePatientSearchSubmit} >
            <Row className='align-items-center'>
              <Col>
                <Form.Group className="mb-3" controlId="id_paciente">
                  <Form.Label>DNI del Paciente</Form.Label>
                  <Form.Control onChange={handlePatientSearch} type="text" placeholder="Ingrese el DNI del paciente" />
                </Form.Group>
              </Col>
              <Col>
                <Button variant='outline-warning' type="reset" className="m-2 mt-4">Borrar</Button>
                <Button variant='warning' type="submit" className="m-2 mt-4">Buscar</Button>
              </Col>
            </Row>
            <Row>
              <table className='table table-striped table-hover table-xxl table-container-l'>
                <thead>
                  <tr>
                    {keysTabPatients.map((item, index) => {
                      return (
                        <th key={index}>{item}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody className='table-group-divider' >
                  {patientsList.map((patient, index) => {
                    return (
                      <tr key={index} >
                        <th scope='row'>{patient.id}</th>
                        <td>{patient.nombre}</td>
                        <td>{patient.apellido}</td>
                        <td>{patient.email}</td>
                        <td>{patient.telefono}</td>
                        <td>{(patient.turnos)?.length}</td>
                        <td><button className='icons-border icon--size icon--edit'
                          type='button'
                          onClick={() => { handleSelectedPatient(patient) }} >
                          <img className='icon-img--size' src={editIcon} alt="" />
                        </button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </Row>
          </Form>
        </div>
        <div className='mt-4' >
          <Form ref={formRef} onSubmit={handleSubmit} >
            <Row>
              <Col>
                <Form.Group className="mb-3" onChange={handleChange} controlId="id_medico">
                  <Form.Label>Seleccione el médico</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Abrir este selector</option>
                    {doctorsList.map((doctor, index) => {
                      return (
                        <option key={index} value={doctor.id}>{doctor.apellido}, {doctor.nombre} - {doctor.especialidad}</option>
                      )
                    })}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="id_paciente">
                  <Form.Label>Nombre del Paciente</Form.Label>
                  <Form.Control type="text" placeholder={`${patientSelected?.nombre}, ${patientSelected?.apellido}`} disabled/>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="motivo_consulta">
                  <Form.Label>Motivo de la consulta</Form.Label>
                  <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el motivo de la consulta" />
                </Form.Group>
              </Col>
            </Row>

            <Button variant='outline-warning' type="reset" className="m-2">
              Borrar
            </Button>

            <Button type="submit" className="m-2">
              Guardar
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}
