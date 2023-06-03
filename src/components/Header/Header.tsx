import React from 'react'

import logocm from '../../assets/icons/logoCM.png'

export const Header = () => {
	return (
		<div className="container-fluid container-header text-white py-4">
			<div className="row align-items-center">
				<div className="col d-flex align-items-center">
					<img src={logocm} className="float-start mx-4 logocm" alt="Logo del centro médico esperanza" />
					<h1 className='h4 text-center' >Centro médico <br/>Esperanza </h1>
				</div>
				<div className="col text-center">
					<h2>Panel de administración</h2>
				</div>
				<div className="col">
				</div>
			</div>
		</div>
	)
}
