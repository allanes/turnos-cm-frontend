/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TurnoCreate = {
    properties: {
        id_consultorio: {
            type: 'number',
            isRequired: true,
        },
        id_medico: {
            type: 'number',
            isRequired: true,
        },
        motivo_consulta: {
            type: 'string',
        },
    },
} as const;
