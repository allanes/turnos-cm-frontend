/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PacienteCreate = {
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
        fecha_nacimiento: {
            type: 'string',
            format: 'date',
        },
        email: {
            type: 'string',
        },
        telefono: {
            type: 'string',
        },
    },
} as const;
