import { useReducer } from 'react';
import axios from 'axios';
// interfaces
import type {
    ResponseApi,
    ReturnDefaultData,
    ReturnMethod,
} from './useaxios/Response.useaxios';
import type { StateResponse } from './useaxios/StateS.useaxios';
import type { OptionRequest } from './useaxios/OptionRequest.useaxios';
// reducer
import axiosReducer from '@/reducers/AxiosReducer.reducer';
// utils
import { API_URL } from '@/utils/constants.utils';

const useAxios = <M extends object>(): ReturnMethod<M> => {
    const initial: StateResponse<M> = {
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: '',
        data: undefined,
    };

    const [state, dispatch] = useReducer(axiosReducer<M>, initial);

    const fetchApi = async (
        request: OptionRequest<M> | string,
    ): Promise<ReturnDefaultData<M>> => {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let response: ResponseApi<M>;
        const url = API_URL;

        try {
            dispatch({ type: 'INIT' });
            // If the URL is a string, it will be a direct GET request.
            if (typeof request === 'string') {
                const responseAxios = await axios.get(`${url}${request}`, {
                    method: 'GET',
                    headers: Object.fromEntries(headers),
                });

                response = responseAxios.data;
            } else {
                // The methods can be POST, PUT, GET, or DELETE.
                if (['PUT', 'PATCH', 'POST'].includes(request.method)) {
                    const responseAxios = await axios(`${url}${request.path}`, {
                        method: request.method,
                        headers: Object.fromEntries(headers),
                        data: request.data ?? {},
                    });
                    console.log('responseAxios', responseAxios);
                    response = responseAxios.data;
                } else {
                    const queries = request.queries
                        ? `?${new URLSearchParams(request.queries)}`
                        : '';

                    const responseAxios = await axios(`${url}${request.path}${queries}`, {
                        method: request.method,
                        headers: Object.fromEntries(headers),
                    });

                    response = responseAxios.data;
                }
            }

            if ([200, 201].includes(response.code)) {
                dispatch({
                    type: 'SUCCESS',
                    payload: {
                        data: response.body,
                        message: response.message,
                    },
                });

                return {
                    isSuccess: true,
                    statusCode: response.code,
                    message: response.message,
                    data: response.body,
                };
            } else {
                console.log('[useAxios] [ERROR]', response);

                dispatch({
                    type: 'ERROR',
                    payload: {
                        data: response.body,
                        message: response.message,
                    },
                });

                return {
                    isSuccess: false,
                    statusCode: response.code,
                    message: response.message,
                    data: response.body,
                };
            }
        } catch (error) {
            console.log('[useAxios] [ERROR]', error);

            dispatch({
                type: 'ERROR',
                payload: {
                    message: 'Algo salió mal, vuelve a intentar más tarde.',
                },
            });

            return {
                data: null,
                isSuccess: false,
            };
        }
    };

    return [state, fetchApi];
};

export default useAxios;
