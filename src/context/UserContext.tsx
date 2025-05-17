import { createContext, type Dispatch } from 'react';

import type { UserAction } from '@/data/interfaces/context/action/UserAction';
import type { StateUserModel } from '@/data/interfaces/context/state/StateUser.model';

interface UserContextModel {
    user: StateUserModel;
    dispatch: Dispatch<UserAction>;
}

export const initialState: StateUserModel = {
    data: undefined,
    isLoggedIn: false,
};

export const UserContext = createContext<UserContextModel>({
    user: initialState,
    dispatch: () => {},
});
