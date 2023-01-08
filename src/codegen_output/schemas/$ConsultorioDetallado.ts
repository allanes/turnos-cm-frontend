/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ConsultorioDetallado = {
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
            isRequired: true,
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        medico: {
            type: 'string',
        },
        pacientes: {
            type: 'array',
            contains: {
                type: 'string',
            },
        },
    },
} as const;
