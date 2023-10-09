import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import authReducer, { AuthAction } from "./authReducer";

// 1. Shape of the context
interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

// 2. Create a Context
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

// 3. Create an AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, dispatch] = useReducer(authReducer, "");

  const contextValue: AuthContextType = {
    user,
    dispatch,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
