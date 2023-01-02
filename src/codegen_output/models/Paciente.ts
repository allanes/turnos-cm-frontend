/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type Paciente = {
    dni: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    id: number;
    turnos?: Array<Turno>;
};

