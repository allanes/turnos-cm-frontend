/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Consultorio = {
    properties: {
        numero: {
            type: 'number',
            isRequired: true,
        },
        sala: {
            type: 'number',
            isRequired: true,
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        descripcion: {
            type: 'string',
        },
    },
} as const;
