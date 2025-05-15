type actions = 'INIT' | 'SUCCESS' | 'ERROR';

export interface ActionReducer<M extends object> {
    type: actions;
    payload?: {
        message?: string;
        data?: M | null;
    };
}
