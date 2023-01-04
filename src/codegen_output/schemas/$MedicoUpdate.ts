/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MedicoUpdate = {
    properties: {
        id: {
            type: 'number',
            isRequired: true,
        },
        nombre: {
            type: 'string',
        },
        apellido: {
            type: 'string',
        },
        email: {
            type: 'string',
        },
        telefono: {
            type: 'string',
        },
        especialidad: {
            type: 'string',
        },
    },
} as const;
