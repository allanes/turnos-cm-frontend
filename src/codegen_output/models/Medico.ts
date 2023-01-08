/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Turno } from './Turno';

export type Medico = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    especialidad: string;
    activo: boolean;
    turnos?: Array<Turno>;
    consultorio?: string;
};

