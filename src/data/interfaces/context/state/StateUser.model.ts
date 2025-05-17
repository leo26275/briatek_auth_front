import type { IAuthResponse } from '@/features/auth/interfaces/IAuthResponse.interface';

export interface StateUserModel {
    data?: IAuthResponse;
    isLoggedIn: boolean;
}
