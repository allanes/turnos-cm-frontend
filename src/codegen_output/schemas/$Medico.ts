/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Medico = {
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
        email: {
            type: 'string',
            isRequired: true,
        },
        telefono: {
            type: 'string',
            isRequired: true,
        },
        especialidad: {
            type: 'string',
            isRequired: true,
        },
        consultorio: {
            type: 'string',
        },
    },
} as const;
