/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PacienteCreate = {
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
        },
        telefono: {
            type: 'string',
        },
    },
} as const;
