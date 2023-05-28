/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Recepcionista } from '../models/Recepcionista';
import type { RecepcionistaCreate } from '../models/RecepcionistaCreate';
import type { RecepcionistaUpdate } from '../models/RecepcionistaUpdate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecepcionistasService {

    /**
     * Read Recepcionistas
     * Retrieve recepcionistas.
     * @param skip
     * @param limit
     * @returns Recepcionista Successful Response
     * @throws ApiError
     */
    public static readRecepcionistasApiV1ReceptionistsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Recepcionista>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/receptionists/',
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
     * Create Recepcionista
     * Create new recepcionista.
     * @param requestBody
     * @returns Recepcionista Successful Response
     * @throws ApiError
     */
    public static createRecepcionistaApiV1ReceptionistsPost(
        requestBody: RecepcionistaCreate,
    ): CancelablePromise<Recepcionista> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/receptionists/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Recepcionista
     * Get recepcionista by ID.
     * @param id
     * @returns Recepcionista Successful Response
     * @throws ApiError
     */
    public static readRecepcionistaApiV1ReceptionistsIdGet(
        id: number,
    ): CancelablePromise<Recepcionista> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/receptionists/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Recepcionista
     * Update an recepcionista.
     * @param id
     * @param requestBody
     * @returns Recepcionista Successful Response
     * @throws ApiError
     */
    public static updateRecepcionistaApiV1ReceptionistsIdPut(
        id: number,
        requestBody: RecepcionistaUpdate,
    ): CancelablePromise<Recepcionista> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/receptionists/{id}',
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
     * Delete Recepcionista
     * Delete an recepcionista.
     * @param id
     * @returns Recepcionista Successful Response
     * @throws ApiError
     */
    public static deleteRecepcionistaApiV1ReceptionistsIdDelete(
        id: number,
    ): CancelablePromise<Recepcionista> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/receptionists/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
