/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type PacienteInDB = {
    id: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: string;
    email: string;
    telefono: string;
    turnos?: Array<Turno>;
};

