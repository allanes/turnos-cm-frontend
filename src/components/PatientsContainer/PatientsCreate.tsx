import React from 'react'
import { Paciente } from '../../codegen_output'
import useNewPatientForm from '../../hooks/useNewPatientsForm'

interface Props {
  onNewPatient: (newPatient: Paciente) => void
}

export const PatientsCreate = ({ onNewPatient }: Props) => {

  const [inputValues, dispatch] = useNewPatientForm()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target

    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleClear = () => {
    dispatch({ type: "clear" })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewPatient(inputValues)
    handleClear()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="number" value={inputValues.id} name='id' placeholder='Dni' />
        <input onChange={handleChange} type="text" value={inputValues.nombre} name='nombre' placeholder='Nombre' />
        <input onChange={handleChange} type="text" value={inputValues.apellido} name='apellido' placeholder='Apellido' />
        <input onChange={handleChange} type="text" value={inputValues.email} name='email' placeholder='Email' />
        <input onChange={handleChange} type="text" value={inputValues.telefono} name='telefono' placeholder='Telefono' />
        <button type='button' onClick={handleClear} >Clear</button>
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
