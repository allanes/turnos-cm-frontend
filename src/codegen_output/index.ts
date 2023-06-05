/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { Consultorio } from './models/Consultorio';
export type { ConsultorioCreate } from './models/ConsultorioCreate';
export type { ConsultorioDetallado } from './models/ConsultorioDetallado';
export type { ConsultorioUpdate } from './models/ConsultorioUpdate';
export type { HTTPValidationError } from './models/HTTPValidationError';
export type { Medico } from './models/Medico';
export type { MedicoConTurnos } from './models/MedicoConTurnos';
export type { MedicoCreate } from './models/MedicoCreate';
export type { MedicoUpdate } from './models/MedicoUpdate';
export type { Paciente } from './models/Paciente';
export type { PacienteCreate } from './models/PacienteCreate';
export type { PacienteInDB } from './models/PacienteInDB';
export type { PacienteUpdate } from './models/PacienteUpdate';
export type { Recepcionista } from './models/Recepcionista';
export type { RecepcionistaCreate } from './models/RecepcionistaCreate';
export type { RecepcionistaUpdate } from './models/RecepcionistaUpdate';
export type { RegistroConsultorios } from './models/RegistroConsultorios';
export type { RegistroConsultoriosCreate } from './models/RegistroConsultoriosCreate';
export type { Turno } from './models/Turno';
export type { TurnoCreate } from './models/TurnoCreate';
export type { TurnoUpdate } from './models/TurnoUpdate';
export type { ValidationError } from './models/ValidationError';

export { $Consultorio } from './schemas/$Consultorio';
export { $ConsultorioCreate } from './schemas/$ConsultorioCreate';
export { $ConsultorioDetallado } from './schemas/$ConsultorioDetallado';
export { $ConsultorioUpdate } from './schemas/$ConsultorioUpdate';
export { $HTTPValidationError } from './schemas/$HTTPValidationError';
export { $Medico } from './schemas/$Medico';
export { $MedicoConTurnos } from './schemas/$MedicoConTurnos';
export { $MedicoCreate } from './schemas/$MedicoCreate';
export { $MedicoUpdate } from './schemas/$MedicoUpdate';
export { $Paciente } from './schemas/$Paciente';
export { $PacienteCreate } from './schemas/$PacienteCreate';
export { $PacienteInDB } from './schemas/$PacienteInDB';
export { $PacienteUpdate } from './schemas/$PacienteUpdate';
export { $Recepcionista } from './schemas/$Recepcionista';
export { $RecepcionistaCreate } from './schemas/$RecepcionistaCreate';
export { $RecepcionistaUpdate } from './schemas/$RecepcionistaUpdate';
export { $RegistroConsultorios } from './schemas/$RegistroConsultorios';
export { $RegistroConsultoriosCreate } from './schemas/$RegistroConsultoriosCreate';
export { $Turno } from './schemas/$Turno';
export { $TurnoCreate } from './schemas/$TurnoCreate';
export { $TurnoUpdate } from './schemas/$TurnoUpdate';
export { $ValidationError } from './schemas/$ValidationError';

export { ConsultoriosService } from './services/ConsultoriosService';
export { DefaultService } from './services/DefaultService';
export { MedicosService } from './services/MedicosService';
export { PacientesService } from './services/PacientesService';
export { QrService } from './services/QrService';
export { RecepcionistasService } from './services/RecepcionistasService';
export { RegistroDeConsultoriosConMDicosService } from './services/RegistroDeConsultoriosConMDicosService';
export { TurnosService } from './services/TurnosService';
