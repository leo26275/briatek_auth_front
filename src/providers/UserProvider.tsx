import { useReducer, type ReactNode } from 'react';
// context
import { initialState, UserContext } from '@/context/UserContext';
// reducer
import userReducer from '@/reducers/userReducer.reducer';

interface UserProviderProps {
    children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ user: state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
}
