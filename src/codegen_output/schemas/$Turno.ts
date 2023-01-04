/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Turno = {
    properties: {
        id_consultorio: {
            type: 'number',
        },
        id_medico: {
            type: 'number',
        },
        motivo_consulta: {
            type: 'string',
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        pendiente: {
            type: 'boolean',
            isRequired: true,
        },
        fecha: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
    },
} as const;
