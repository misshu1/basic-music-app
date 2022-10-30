import {
    createContext,
    ReactNode,
    useState,
    FC,
    useContext,
    useCallback
} from 'react';

interface GlobalProviderProps {
    children: ReactNode;
}

interface GlobalContextProps {
    token: string;
    saveToken: (token: string) => void;
}

const GlobalContext = createContext<GlobalContextProps>(
    {} as GlobalContextProps
);
export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
    const [token, setToken] = useState('');

    const saveToken = useCallback((newToken: string) => {
        setToken(newToken);
        localStorage.setItem('token', newToken);
    }, []);

    return (
        <GlobalContext.Provider value={{ token, saveToken }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
