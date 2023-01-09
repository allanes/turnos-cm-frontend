import React, { useRef } from 'react'
import { TurnoCreate } from '../../codegen_output'
import useNewTurnForm from '../../hooks/useNewTurnsForm'
import { Medico } from '../../codegen_output'

import { Row, Col, Button, Form } from 'react-bootstrap'

interface Props {
  onNewTurn: (newPatient: TurnoCreate) => void
  doctorsList: Array<Medico>
}

export const TurnsCreate = ({ onNewTurn, doctorsList }: Props) => {

  const [inputValues, dispatch] = useNewTurnForm()
  const formRef = useRef<HTMLFormElement>(null)

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
  }

  return (
    <div className='table-container-xl'>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Row>
          <Col>
          <Form.Group className="mb-3" onChange={handleChange} controlId="id_medico">
            <Form.Label>Seleccione el médico</Form.Label>
            <Form.Select aria-label="Default select example">
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
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el nombre del paciente" />
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
          Limpiar
        </Button>

        <Button type="submit" className="m-2">
          Guardar
        </Button>
      </Form>
    </div>
  )
}
