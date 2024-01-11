import { EventObject } from "@interfaces/interfaces";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  loginResult: any; // Puedes ajustar el tipo según la estructura de tu respuesta de inicio de sesión
  setLoginResponse: (response: any) => void; // Ajusta el tipo según la estructura de tu respuesta de inicio de sesión
  currentData: any;
  setCurrentDataResponse: (response: any) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React }> = ({ children }) => {
  const [loginResult, setLoginResult] = useState<any | null>(null);

  const [currentData, setCurrentData] = useState<EventObject | null>({
    id: "",
    title: "",
    nameOne: "",
    surnameOne: "",
    nameTwo: "",
    surnameTwo: "",
    date: "",
    contact: [],
    locations: [],
    gifts: [],
    message: "",
    menus: {},
    wishList: [],
    dressCode: "",
    childPolicy: false,
  });

  const setCurrentDataResponse = (response: any) => {
    setCurrentData(response);
  };

  const setLoginResponse = (response: any) => {
    setLoginResult(response);
  };
  return (
    <AuthContext.Provider
      value={{
        loginResult,
        setLoginResponse,
        setCurrentDataResponse,
        currentData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utiliyado dentro de un AuthProvider");
  }
  return context;
};
