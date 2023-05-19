/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RegistroConsultorios = {
    properties: {
        id_consultorio: {
            type: 'number',
            isRequired: true,
        },
        id_medico: {
            type: 'number',
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        fecha: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
    },
} as const;
