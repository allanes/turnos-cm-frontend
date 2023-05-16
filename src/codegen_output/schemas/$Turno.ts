/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Turno = {
    properties: {
        id_medico: {
            type: 'number',
        },
        id_paciente: {
            type: 'number',
        },
        motivo_consulta: {
            type: 'string',
        },
        id: {
            type: 'number',
            isRequired: true,
        },
        nro_orden: {
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
        nombre_medico: {
            type: 'string',
        },
        nombre_paciente: {
            type: 'string',
        },
    },
} as const;
