/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MedicoUpdate = {
    properties: {
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
    },
} as const;
