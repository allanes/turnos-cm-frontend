import React from 'react'
import { Patient } from '../../types/types'
import useNewPatientForm from '../../hooks/useNewPatientsForm'

interface FormProps {
  onNewPatient: (newPatient: Patient) => void
}

export const NewPatient = ({ onNewPatient }: FormProps) => {

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
    // onNewPatient(inputValues)
    handleClear()
  }


  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="number" value={inputValues.dni} name='dni' placeholder='dni' />
        <input onChange={handleChange} type="text" value={inputValues.patientName} name='patientName' placeholder='patientName' />
        <input onChange={handleChange} type="text" value={inputValues.patientSurName} name='patientSurName' placeholder='patientSurName' />
        <input onChange={handleChange} type="text" value={inputValues.email} name='email' placeholder='email' />
        <button type='button' onClick={handleClear} >Clear</button>
        <button type='submit'>Save</button>
      </form> */}
    </div>
  )
}
