/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type Medico = {
    dni: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    especialidad: string;
    id: number;
    activo: boolean;
    turnos?: Array<Turno>;
    consultorio?: string;
};

