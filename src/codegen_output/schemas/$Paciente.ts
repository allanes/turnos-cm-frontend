/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Paciente = {
    properties: {
        dni: {
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
        id: {
            type: 'number',
            isRequired: true,
        },
        turnos: {
            type: 'array',
            contains: {
                type: 'Turno',
            },
        },
    },
} as const;
