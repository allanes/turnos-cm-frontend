/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

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

}
