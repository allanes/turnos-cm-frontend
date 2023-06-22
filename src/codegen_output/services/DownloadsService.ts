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
    public static descargarQrDescargasDescargarQrGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/descargas/descargar_qr',
        });
    }

    /**
     * Descargar Manual Iniciar Teles
     * @returns any Successful Response
     * @throws ApiError
     */
    public static descargarManualIniciarTelesDescargasManualIniciarTelesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/descargas/manual_iniciar_teles',
        });
    }

    /**
     * Descargar Manual Apagar Teles
     * @returns any Successful Response
     * @throws ApiError
     */
    public static descargarManualApagarTelesDescargasManualApagarTelesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/descargas/manual_apagar_teles',
        });
    }

}
