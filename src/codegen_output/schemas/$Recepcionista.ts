/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Recepcionista = {
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
    },
} as const;
