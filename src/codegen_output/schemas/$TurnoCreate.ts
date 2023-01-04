/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TurnoCreate = {
    properties: {
        id_paciente: {
            type: 'number',
            isRequired: true,
        },
        id_medico: {
            type: 'number',
            isRequired: true,
        },
        motivo_consulta: {
            type: 'string',
            isRequired: true,
        },
        fecha: {
            type: 'string',
            isRequired: true,
            format: 'date-time',
        },
        pendiente: {
            type: 'boolean',
        },
    },
} as const;
