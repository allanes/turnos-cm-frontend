/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Turno } from '../models/Turno';
import type { TurnoCreate } from '../models/TurnoCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TurnosService {

    /**
     * List Turnos
     * @param skip
     * @param limit
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static listTurnosTurnosGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Turno>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/turnos/',
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
     * Post Turno
     * @param requestBody
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static postTurnoTurnosPost(
        requestBody: TurnoCreate,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/turnos/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get Turno
     * @param turnoId
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static getTurnoTurnosTurnoIdGet(
        turnoId: number,
    ): CancelablePromise<Turno> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/turnos/{turno_id}',
            path: {
                'turno_id': turnoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
