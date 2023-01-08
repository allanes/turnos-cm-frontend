/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RecepcionistaUpdate = {
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
    },
} as const;
