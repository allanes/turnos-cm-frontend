/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MedicoConTurnos = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        nombre: {
            type: 'string',
            isRequired: true,
        },
        apellido: {
            type: 'string',
            isRequired: true,
        },
        email: {
            type: 'string',
            isRequired: true,
        },
        telefono: {
            type: 'string',
            isRequired: true,
        },
        especialidad: {
            type: 'string',
            isRequired: true,
        },
        consultorio: {
            type: 'string',
        },
        turnos: {
            type: 'array',
            contains: {
                type: 'Turno',
            },
        },
    },
} as const;
