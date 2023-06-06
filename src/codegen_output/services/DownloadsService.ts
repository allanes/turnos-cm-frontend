/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DownloadsService {

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

    /**
     * Descargar Manual Iniciar Teles
     * @returns any Successful Response
     * @throws ApiError
     */
    public static descargarManualIniciarTelesManualIniciarTelesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/manual_iniciar_teles',
        });
    }

    /**
     * Descargar Manual Apagar Teles
     * @returns any Successful Response
     * @throws ApiError
     */
    public static descargarManualApagarTelesManualApagarTelesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/manual_apagar_teles',
        });
    }

}
