/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Medico } from '../models/Medico';
import type { MedicoConTurnos } from '../models/MedicoConTurnos';
import type { MedicoCreate } from '../models/MedicoCreate';
import type { MedicoUpdate } from '../models/MedicoUpdate';
import type { Turno } from '../models/Turno';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MedicosService {

    /**
     * Read Medicos
     * Retrieve medicos.
     * @param skip
     * @param limit
     * @returns Medico Successful Response
     * @throws ApiError
     */
    public static readMedicosApiV1DoctorsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Medico>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/doctors/',
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
     * Create Medico
     * Create new medico.
     * @param requestBody
     * @returns Medico Successful Response
     * @throws ApiError
     */
    public static createMedicoApiV1DoctorsPost(
        requestBody: MedicoCreate,
    ): CancelablePromise<Medico> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/doctors/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Medicos Por Sala
     * Retrieve medicos.
     * @param sala
     * @param skip
     * @param limit
     * @returns MedicoConTurnos Successful Response
     * @throws ApiError
     */
    public static readMedicosPorSalaApiV1DoctorsPorSalaSalaGet(
        sala: string,
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<MedicoConTurnos>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/doctors/por-sala/{sala}',
            path: {
                'sala': sala,
            },
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
     * Read Medico
     * Get medico by ID.
     * @param id
     * @returns MedicoConTurnos Successful Response
     * @throws ApiError
     */
    public static readMedicoApiV1DoctorsIdGet(
        id: number,
    ): CancelablePromise<MedicoConTurnos> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/doctors/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Medico
     * Update an medico.
     * @param id
     * @param requestBody
     * @returns Medico Successful Response
     * @throws ApiError
     */
    public static updateMedicoApiV1DoctorsIdPut(
        id: number,
        requestBody: MedicoUpdate,
    ): CancelablePromise<Medico> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/doctors/{id}',
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
     * Delete Medico
     * Delete an medico.
     * @param id
     * @returns Medico Successful Response
     * @throws ApiError
     */
    public static deleteMedicoApiV1DoctorsIdDelete(
        id: number,
    ): CancelablePromise<Medico> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/doctors/{id}',
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
     * Handle Previous Turn
     * @param id
     * @returns Turno Successful Response
     * @throws ApiError
     */
    public static handlePreviousTurnApiV1DoctorsIdPreviousPatientGet(
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
