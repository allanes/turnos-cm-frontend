/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type Paciente = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    turnos?: Array<Turno>;
};

