import React, { useRef } from 'react'
import { ConsultorioCreate } from '../../codegen_output'
import useNewOfficeForm from '../../hooks/useNewOfficesForm'

import { Row, Col, Button, Form } from 'react-bootstrap'

interface Props {
    onNewOffice: (newOffice: ConsultorioCreate) => void
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
            <Form.Group className="mb-3" controlId="sala">
              <Form.Label>Sala</Form.Label>
              <Form.Control onChange={handleChange} type="number" placeholder="Ingrese la sala a la cual pertenece el consultorio" />
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
  )
}
