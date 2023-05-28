/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TurnoCreate = {
    properties: {
        id_medico: {
            type: 'number',
            isRequired: true,
        },
        id_paciente: {
            type: 'number',
            isRequired: true,
        },
        motivo_consulta: {
            type: 'string',
        },
    },
} as const;
