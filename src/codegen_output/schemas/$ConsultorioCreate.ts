/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ConsultorioCreate = {
    properties: {
        numero: {
            type: 'number',
            isRequired: true,
        },
        sala: {
            type: 'number',
            isRequired: true,
        },
        descripcion: {
            type: 'string',
        },
    },
} as const;
