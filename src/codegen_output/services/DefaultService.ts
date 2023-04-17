/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Turno } from '../models/Turno';
import type { TurnoCreate } from '../models/TurnoCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Handle Create Turno
     * @param requestBody
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static handleCreateTurnoApiV1TurnsPost(
        requestBody: TurnoCreate,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/turns/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Inicializar Db
     * @returns any Successful Response
     * @throws ApiError
     */
    public static inicializarDbInicializarDbGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inicializar_db/',
        });
    }

    /**
     * Inicializar Db
     * @returns any Successful Response
     * @throws ApiError
     */
    public static inicializarDbCargarTurnosEjemploGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cargar-turnos-ejemplo/',
        });
    }

    /**
     * Handle Next Turn
     * @param id
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static handleNextTurnApiV1DoctorsIdNextPatientGet(
        id: number,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/doctors/{id}/nextPatient',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Handle Next Turn
     * @param id
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static handleNextTurnApiV1DoctorsIdPreviousPatientGet(
        id: number,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/doctors/{id}/previousPatient',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
