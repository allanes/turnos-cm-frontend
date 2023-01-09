import React, { useRef } from 'react'
import { Consultorio } from '../../codegen_output'
import useNewOfficeForm from '../../hooks/useNewOfficesForm'

import { Row, Col, Button, Form } from 'react-bootstrap'

interface Props {
    onNewOffice: (newOffice: Consultorio) => void
}

export const OfficesCreate = ({ onNewOffice }: Props) => {

  const [inputValues, dispatch] = useNewOfficeForm()
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
    onNewOffice(inputValues)
    formRef.current?.reset()
  }

  return (
    <div className='table-container-l'>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="id">
              <Form.Label>Identificador de consultorio</Form.Label>
              <Form.Control onChange={handleChange} type="number" placeholder="Ingrese el identificador" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="sala">
              <Form.Label>Sala</Form.Label>
              <Form.Control onChange={handleChange} type="number" placeholder="Ingrese la sala" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="numero">
              <Form.Label>Número</Form.Label>
              <Form.Control onChange={handleChange} type="number" placeholder="Ingrese el número" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="descripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control onChange={handleChange} type="text" placeholder="Ingrese la descripción" />
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
