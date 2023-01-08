/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Turno } from '../models/Turno';
import type { TurnoCreate } from '../models/TurnoCreate';
import type { TurnoUpdate } from '../models/TurnoUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TurnosService {

    /**
     * Read Turnos
     * Retrieve turnos.
     * @param skip
     * @param limit
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static readTurnosApiV1TurnsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Turno>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/turns/',
            query: {
                'skip': skip,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Create Turno
     * Create new turno.
     * @param requestBody
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static createTurnoApiV1TurnsPost(
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
     * Read Turno
     * Get turno by ID.
     * @param id
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static readTurnoApiV1TurnsIdGet(
        id: number,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/turns/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Turno
     * Update an turno.
     * @param id
     * @param requestBody
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static updateTurnoApiV1TurnsIdPut(
        id: number,
        requestBody: TurnoUpdate,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/turns/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete Turno
     * Delete an turno.
     * @param id
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static deleteTurnoApiV1TurnsIdDelete(
        id: number,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/turns/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
