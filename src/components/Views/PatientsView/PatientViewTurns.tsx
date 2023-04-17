import React from 'react'

interface Props {
  turnsList?: string[]
}

export const PatientViewTurns = ({ turnsList }: Props) => {
  return (
    <div>
      <ol className='h1'>
        {turnsList?.map((patient, index) => {
          return (
            <li key={index}>
              <p className='h1'>{patient}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}



