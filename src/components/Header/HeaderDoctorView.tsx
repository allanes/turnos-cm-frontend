import React from 'react'

import logocm from '../../assets/icons/logoCM.png'

export const HeaderDoctorView = () => {
	return (
		<div className="container-fluid container-header text-center text-white py-4">
			<div className="row align-items-center">
				<div className="col-2">
					<img src={logocm} className="float-start mx-4 logocm" alt="Logo del centro médico esperanza" />
				</div>
				<div className="col-10">
					<h2 className='my-0'>Plantel Médico</h2>
				</div>
			</div>
		</div>
	)
}
