/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Consultorio } from '../models/Consultorio';
import type { ConsultorioCreate } from '../models/ConsultorioCreate';
import type { ConsultorioUpdate } from '../models/ConsultorioUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ConsultoriosService {

    /**
     * Read Consultorios
     * Retrieve consultorios.
     * @param skip
     * @param limit
     * @returns Consultorio Successful Response
     * @throws ApiError
     */
    public static readConsultoriosApiV1OfficesGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Consultorio>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/offices/',
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
     * Create Consultorio
     * Create new consultorio.
     * @param requestBody
     * @returns Consultorio Successful Response
     * @throws ApiError
     */
    public static createConsultorioApiV1OfficesPost(
        requestBody: ConsultorioCreate,
    ): CancelablePromise<Consultorio> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/offices/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Consultorio
     * Get consultorio by ID.
     * @param id
     * @returns Consultorio Successful Response
     * @throws ApiError
     */
    public static readConsultorioApiV1OfficesIdGet(
        id: number,
    ): CancelablePromise<Consultorio> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/offices/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Consultorio
     * Update an consultorio.
     * @param id
     * @param requestBody
     * @returns Consultorio Successful Response
     * @throws ApiError
     */
    public static updateConsultorioApiV1OfficesIdPut(
        id: number,
        requestBody: ConsultorioUpdate,
    ): CancelablePromise<Consultorio> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/offices/{id}',
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
     * Delete Consultorio
     * Delete an consultorio.
     * @param id
     * @returns Consultorio Successful Response
     * @throws ApiError
     */
    public static deleteConsultorioApiV1OfficesIdDelete(
        id: number,
    ): CancelablePromise<Consultorio> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/offices/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
