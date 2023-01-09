/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $MedicoCreate = {
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
        },
        telefono: {
            type: 'string',
        },
        especialidad: {
            type: 'string',
        },
    },
} as const;
