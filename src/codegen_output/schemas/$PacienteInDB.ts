/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PacienteInDB = {
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
        fecha_nacimiento: {
            type: 'string',
            isRequired: true,
            format: 'date',
        },
        email: {
            type: 'string',
            isRequired: true,
        },
        telefono: {
            type: 'string',
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