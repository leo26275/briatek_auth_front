import type { OptionRequest } from './OptionRequest.useaxios';
import type { StateResponse } from './State.useaxios';

export interface ResponseApi<M extends object> {
    code: number;
    message: string;
    body: M | null;
}

export interface ReturnDefaultData<M extends object> {
    statusCode?: number;
    message?: string;
    isSuccess: boolean;
    data: M | null;
}

export type ReturnMethod<M extends object> = [
    StateResponse<M>,
    (config: OptionRequest<M> | string) => Promise<ReturnDefaultData<M>>,
];
