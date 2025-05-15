import type { ActionReducer } from '@/hooks/useaxios/action.useaxios';
import type { StateResponse } from '@/hooks/useaxios/StateS.useaxios';

const axiosReducer = <M extends object>(
    state: StateResponse<M>,
    action: ActionReducer<M>,
): StateResponse<M> => {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            };

        case 'SUCCESS':
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: action.payload?.message ?? '',
                data: action.payload?.data ?? state.data,
            };

        case 'ERROR':
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                message: action.payload?.message ?? '',
                data: action.payload?.data ?? state.data,
            };
        default:
            return {
                ...state,
            };
    }
};

export default axiosReducer;
