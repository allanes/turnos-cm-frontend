/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { Consultorio } from './models/Consultorio';
export type { ConsultorioCreate } from './models/ConsultorioCreate';
export type { ConsultorioUpdate } from './models/ConsultorioUpdate';
export type { HTTPValidationError } from './models/HTTPValidationError';
export type { Medico } from './models/Medico';
export type { MedicoCreate } from './models/MedicoCreate';
export type { MedicoUpdate } from './models/MedicoUpdate';
export type { Paciente } from './models/Paciente';
export type { PacienteCreate } from './models/PacienteCreate';
export type { PacienteUpdate } from './models/PacienteUpdate';
export type { Turno } from './models/Turno';
export type { TurnoCreate } from './models/TurnoCreate';
export type { ValidationError } from './models/ValidationError';

export { $Consultorio } from './schemas/$Consultorio';
export { $ConsultorioCreate } from './schemas/$ConsultorioCreate';
export { $ConsultorioUpdate } from './schemas/$ConsultorioUpdate';
export { $HTTPValidationError } from './schemas/$HTTPValidationError';
export { $Medico } from './schemas/$Medico';
export { $MedicoCreate } from './schemas/$MedicoCreate';
export { $MedicoUpdate } from './schemas/$MedicoUpdate';
export { $Paciente } from './schemas/$Paciente';
export { $PacienteCreate } from './schemas/$PacienteCreate';
export { $PacienteUpdate } from './schemas/$PacienteUpdate';
export { $Turno } from './schemas/$Turno';
export { $TurnoCreate } from './schemas/$TurnoCreate';
export { $ValidationError } from './schemas/$ValidationError';

export { ConsultoriosService } from './services/ConsultoriosService';
export { DefaultService } from './services/DefaultService';
export { MedicosService } from './services/MedicosService';
export { PacientesService } from './services/PacientesService';
export { TurnosService } from './services/TurnosService';
