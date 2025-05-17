import type { IAuthResponse } from '@/features/auth/interfaces/IAuthResponse.interface';

export const UserActionTypes = {
    UPDATE: 'UPDATE',
    LOGOUT: 'LOGOUT',
    LOGIN: 'LOGIN',
} as const;

export type UserActionType = (typeof UserActionTypes)[keyof typeof UserActionTypes];

export interface UserAction {
    type: UserActionType;
    payload?: {
        data?: IAuthResponse;
        isLoggedIn?: boolean;
    };
}
