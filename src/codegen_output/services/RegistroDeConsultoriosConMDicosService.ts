/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegistroConsultorios } from '../models/RegistroConsultorios';
import type { RegistroConsultoriosCreate } from '../models/RegistroConsultoriosCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RegistroDeConsultoriosConMDicosService {

    /**
     * Read Consultorios
     * Retrieve registros consultorios.
     * @returns RegistroConsultorios Successful Response
     * @throws ApiError
     */
    public static readConsultoriosApiV1OfficesToDoctorsGet(): CancelablePromise<Array<RegistroConsultorios>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/offices-to-doctors/',
        });
    }

    /**
     * Create Consultorio
     * Create new registro consultorio.
     * @param requestBody
     * @returns RegistroConsultorios Successful Response
     * @throws ApiError
     */
    public static createConsultorioApiV1OfficesToDoctorsPost(
        requestBody: RegistroConsultoriosCreate,
    ): CancelablePromise<RegistroConsultorios> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/offices-to-doctors/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
