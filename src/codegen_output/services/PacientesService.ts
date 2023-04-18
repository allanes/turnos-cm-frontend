/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Paciente } from '../models/Paciente';
import type { PacienteCreate } from '../models/PacienteCreate';
import type { PacienteInDB } from '../models/PacienteInDB';
import type { PacienteUpdate } from '../models/PacienteUpdate';
import type { Turno } from '../models/Turno';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PacientesService {

    /**
     * Read Pacientes
     * Retrieve pacientes.
     * @param skip
     * @param limit
     * @returns Paciente Successful Response
     * @throws ApiError
     */
    public static readPacientesApiV1PatientsGet(
        skip?: number,
        limit: number = 100,
    ): CancelablePromise<Array<Paciente>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/patients/',
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
     * Create Paciente
     * Create new paciente.
     * @param requestBody
     * @returns Paciente Successful Response
     * @throws ApiError
     */
    public static createPacienteApiV1PatientsPost(
        requestBody: PacienteCreate,
    ): CancelablePromise<Paciente> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/patients/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Read Paciente
     * Get paciente by ID.
     * @param id
     * @returns PacienteInDB Successful Response
     * @throws ApiError
     */
    public static readPacienteApiV1PatientsIdGet(
        id: number,
    ): CancelablePromise<PacienteInDB> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/patients/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update Paciente
     * Update an paciente.
     * @param id
     * @param requestBody
     * @returns Paciente Successful Response
     * @throws ApiError
     */
    public static updatePacienteApiV1PatientsIdPut(
        id: number,
        requestBody: PacienteUpdate,
    ): CancelablePromise<Paciente> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/patients/{id}',
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
     * Delete Paciente
     * Delete an paciente.
     * @param id
     * @returns Paciente Successful Response
     * @throws ApiError
     */
    public static deletePacienteApiV1PatientsIdDelete(
        id: number,
    ): CancelablePromise<Paciente> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/patients/{id}',
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

}
