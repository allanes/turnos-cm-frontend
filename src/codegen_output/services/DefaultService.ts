/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * Main
     * @returns any Successful Response
     * @throws ApiError
     */
    public static mainNotificationGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification',
        });
    }

    /**
     * Inicializar Db
     * @returns any Successful Response
     * @throws ApiError
     */
    public static inicializarDbInicializarDbGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/inicializar_db/',
        });
    }

    /**
     * Inicializar Db
     * @returns any Successful Response
     * @throws ApiError
     */
    public static inicializarDbCargarTurnosEjemploGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cargar-turnos-ejemplo/',
        });
    }

    /**
     * Read Videos
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readVideosListaVideosGdriveGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lista-videos-gdrive',
        });
    }

    /**
     * Read Videos
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readVideosCarpetaVideosGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carpeta-videos',
        });
    }

    /**
     * Read Videos
     * @returns any Successful Response
     * @throws ApiError
     */
    public static readVideosListaVideosLocalesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/lista-videos-locales',
        });
    }

    /**
     * Get Video
     * @param videoId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getVideoVideoVideoIdGet(
        videoId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/video/{video_id}',
            path: {
                'video_id': videoId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Handle Abrir Vistas Teles
     * @returns any Successful Response
     * @throws ApiError
     */
    public static handleAbrirVistasTelesAbrirVentanasTelesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/abrir-ventanas-teles',
        });
    }

}
