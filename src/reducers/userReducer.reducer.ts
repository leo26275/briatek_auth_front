import {
    UserActionTypes,
    type UserAction,
} from '@/data/interfaces/context/action/UserAction';
import type { StateUserModel } from '@/data/interfaces/context/state/StateUser.model';

export default function userReducer(
    state: StateUserModel,
    action: UserAction,
): StateUserModel {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {
                ...state,
                data: action?.payload?.data || state.data,
                isLoggedIn: true,
            };

        case UserActionTypes.LOGOUT:
            return {
                ...state,
                data: undefined,
                isLoggedIn: false,
            };

        case UserActionTypes.UPDATE:
            return {
                ...state,
                data: action.payload?.data || state.data,
                isLoggedIn: action.payload?.isLoggedIn || state.isLoggedIn,
            };

        default:
            return state;
    }
}
