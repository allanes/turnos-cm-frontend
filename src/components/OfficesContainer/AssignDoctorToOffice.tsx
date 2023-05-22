import React, { useRef } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { Medico, RegistroConsultoriosCreate } from '../../codegen_output'
import { Consultorio } from '../../codegen_output'
import useNewAssignDoctorToOffice from '../../hooks/useNewAssignDoctorToOffice'


interface Props {
  officesList: Array<Consultorio>
  doctorsList: Array<Medico>
  onNewAssign: (assignDoctorToOffice: RegistroConsultoriosCreate) => void
}

export const AssignDoctorToOffice = ({ officesList, doctorsList, onNewAssign }: Props) => {

  const [inputValues, dispatch] = useNewAssignDoctorToOffice()
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
    onNewAssign(inputValues)
    formRef.current?.reset()
  }

  return (
    <div className='table-container-xl mb-4'>
      <div className='table-container-l text-center mb-5'>
        <p className='h3'>Asociar consultorio con médico</p>
      </div>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <Row className='align-items-center'>
          <Col>
            <Form.Group className="mb-3" onChange={handleChange} controlId="id_consultorio">
              <Form.Label>Seleccione el consultorio</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>...</option>
                {officesList.map((office, index) => {
                  return (
                    <option key={index} value={office.id}>{office.descripcion}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" onChange={handleChange} controlId="id_medico">
              <Form.Label>Seleccione el médico</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>...</option>
                {doctorsList.map((doctor, index) => {
                  return (
                    <option key={index} value={doctor.id}>{doctor.apellido}, {doctor.nombre} - {doctor.especialidad}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit" variant='success' className="m-2 mt-4">
              Asignar médico
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}
