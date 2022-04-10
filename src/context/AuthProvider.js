import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useServices();
    const firebase = useFirebase();
    return (
        <AuthContext.Provider value={[allContext, firebase]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;