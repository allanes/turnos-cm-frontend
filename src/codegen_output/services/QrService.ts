/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class QrService {

    /**
     * Descargar Qr
     * @returns any Successful Response
     * @throws ApiError
     */
    public static descargarQrDescargarQrGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/descargar_qr',
        });
    }

}
