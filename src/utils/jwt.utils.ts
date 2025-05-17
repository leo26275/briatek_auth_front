import { jwtDecode } from 'jwt-decode';
// interfaces
import type { IAuthResponse } from '@/features/auth/interfaces/IAuthResponse.interface';

export function decodeToken(token: string): IAuthResponse | null {
    try {
        const decoded = jwtDecode<IAuthResponse>(token);
        return decoded;
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
}
