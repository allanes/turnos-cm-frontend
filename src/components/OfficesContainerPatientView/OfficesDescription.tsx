import { OfficesPatientsList } from './OfficesPatientsList'
import { ConsultorioDetallado } from '../../codegen_output'

interface Props {
	officesList: Array<ConsultorioDetallado>
}

export const OfficesDescription = ({ officesList }: Props) => {

	return (
		<div className='container-md text-center my-4'>
			<div className='container-fluid'>
				<div className="row g-5">
					{officesList.map((office, index) => {
						return (
							<div className='col-12 col-md-6 col-xxl-4' key={index}>
								<div className='cardRoom'>
									<div className='cardRoom-Top'>
										<p className='h2'>Dr/a. {office.medico}</p>
										<p className='h5'>Consultorio {office.numero}</p>
										<p className='h5'>Sala {office.sala}</p>
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

