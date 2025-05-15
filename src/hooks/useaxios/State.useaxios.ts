export interface StateResponse<M extends object> {
    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    message: string;
    data?: M;
}
