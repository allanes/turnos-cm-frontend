/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type MedicoConTurnos = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    especialidad: string;
    consultorio?: string;
    turnos?: Array<Turno>;
};

