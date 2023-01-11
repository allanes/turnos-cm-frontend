import { OfficesPatientsList } from './OfficesPatientsList'
import { ConsultorioDetallado } from '../../codegen_output'

interface Props {
	officesList: Array<ConsultorioDetallado>
}

export const OfficesDescription = ({ officesList }: Props) => {

	return (
		<div className='container-md text-center my-4'>
			<div className='container'>
				<div className="row g-5">
					{officesList.map((office, index) => {
						return (
							<div className='col-12 col-md-6 col-xxl-4' key={index}>
								<div className='cardRoom'>
									<div className='cardRoom-Top'>
										<h1 className='text-white'>Consultorio {office.numero}</h1>
										<h3 className='text-white'>Sala {office.sala}</h3>
										<h4><small>Dr. {office.medico} </small></h4>
									</div>
									<div>
										<OfficesPatientsList patientsList={office.pacientes} /> 
									</div>
									<div>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

