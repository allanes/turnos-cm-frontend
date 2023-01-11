import React, { useRef } from 'react'
import { Paciente } from '../../codegen_output'
import useNewPatientForm from '../../hooks/useNewPatientsForm'

import { Row, Col, Button, Form } from 'react-bootstrap'

import Swal from 'sweetalert2'

interface Props {
  onNewPatient: (newPatient: Paciente) => void
}

export const PatientsCreate = ({ onNewPatient }: Props) => {

  const [inputValues, dispatch] = useNewPatientForm()
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
    onNewPatient(inputValues)
    formRef.current?.reset()
    Swal.fire(
      `${inputValues.nombre}, ${inputValues.apellido}`,
      'ha sido guardado con éxito',
      'success'
    )
  }

  return (
    <div className='table-container-xl'>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>Documento de identidad</Form.Label>
              <Form.Control onChange={handleChange} type="number" placeholder="Ingrese el DNI" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="nombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el nombre" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="apellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el apellido" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el email" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="telefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese el teléfono" />
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
