import React from 'react'

interface Props{
    patientsList: string[]
}

export const RoomPatientsList = ({patientsList}: Props) => {
  return (
    <div>
        {patientsList.map((patient, index) => {
            return(
                <div key={index}>
                    {patient}
                </div>
            )
        })}
    </div>
  )
}
