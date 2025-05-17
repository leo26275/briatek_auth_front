import { useContext } from 'react';

import { UserContext } from '@/context/UserContext';
import type { IAuthResponse } from '@/features/auth/interfaces/IAuthResponse.interface';
import { UserActionTypes } from '@/data/interfaces/context/action/UserAction';

const useUser = () => {
    const { user, dispatch } = useContext(UserContext);

    const onLogin = (data: IAuthResponse) => {
        dispatch({ type: UserActionTypes.LOGIN, payload: { data, isLoggedIn: true } });
    };

    const onLogout = () => {
        dispatch({ type: UserActionTypes.LOGOUT });
    };

    const onUpdate = (data?: IAuthResponse, isLoggedIn?: boolean) => {
        dispatch({ type: UserActionTypes.UPDATE, payload: { data, isLoggedIn } });
    };

    const methods = { onLogin, onLogout, onUpdate };

    return { userData: user, userMethods: methods };
};

export default useUser;
