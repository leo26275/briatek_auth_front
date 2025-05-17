import type { ICompany } from './ICompany.interface';
import type { IModule } from './IModule.interface';
import type { IRole } from './IRole.interface';
import type { IUser } from './IUser.interface';

export interface IAuthResponse {
    user: IUser;
    company: ICompany;
    roles: IRole[];
    modules: IModule[];
    iat: number;
    exp: number; // TOKEN EXPIRATION
}
