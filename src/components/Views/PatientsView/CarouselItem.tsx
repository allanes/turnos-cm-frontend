import { ConsultorioDetallado } from '../../../codegen_output'

interface OfficesState {
	officesList: Array<ConsultorioDetallado>
	consultorioId: number;
	animationActive: boolean;
}

export const handleRefresh = (
	officesList: Array<ConsultorioDetallado>,
	consultorioId: number,
	setAnimationActive: Function) => {
	// // Check if the refresh event is targeting this consultorio
	if (officesList.some((office) => office.id === consultorioId)) {
		console.log('setAnimationActive called')
		setAnimationActive(true);
		// Stop the animation after 5 seconds
		setTimeout(() => setAnimationActive(false), 5000);
	}
};

export const CarouselItem = ({ officesList, consultorioId, animationActive }: OfficesState) => {

	return (
		<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="cardRoom-container">
					{officesList.map((office, index) => {
						const isFirstOffice = index === 0;
						return (
							<div key={office.id} className={isFirstOffice ? 'carousel-item active cardRoom' : 'carousel-item cardRoom'}>
								<div className='patient-cardRoom-Top'>
									<p className='h1'>{office.medico}</p>
									<p>Consultorio: {office.id}</p>
								</div>
								<div>
									<table className='table table-striped table-hover table-xxl table-container-sm table-turns-container'>
										<tbody>
											{office.pacientes?.slice(0, 3).map((turn, index) => {
												const isFirstPatient = index === 0;
												return (
													<tr key={index} className={isFirstPatient ? 'table-warning' : ''}>
														<th scope='row'><p className='mt-2'>{index + 1}</p></th>
														<td className='h2 text-start'>{turn}</td>
													</tr>
												)
											})}
										</tbody>
									</table>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	)
}

