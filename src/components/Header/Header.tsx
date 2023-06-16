import React, {useEffect} from 'react'
import axios from 'axios';
import logocm from '../../assets/icons/logoCM.png'
import { PORT_SERVER } from '../../types/config'

export const Header = () => {

	const handleAbrirTeles = async () => {
		await axios.get(`${PORT_SERVER}/restart-ngrok`);
	}

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
					<div className="col button btn  text-center">
						<button type="button" onClick={handleAbrirTeles} className='btn btn-success btn-sm px-4'>Reiniciar QRs</button>										
				</div>
			</div>
		</div>
	)
}
