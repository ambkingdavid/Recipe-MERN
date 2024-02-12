import { createContext, useContext, useState, useQuery } from "react";
import { useQuery } from "react-query"

import Toast from "../components/Toast";

const AppContext = createContext(undefined);
export const TestContext = createContext({});


export function TestContextProvider({ children }) {
    const [message, setMessage] = useState({})
    return (
        <TestContext.Provider value={{ message, setMessage }}>
            {children}
        </TestContext.Provider>
    )
}

export const AppContextProvider = ({ children }) => {
    const [toast, setToast] = useState(undefined);

    const { isError } = useQuery('validateToken', apiClient.validateToken, {
        retry: false,
    })

    return (
        <AppContext.Provider
            value={{
                showToast: (toastMessage) => {
                    setToast(toastMessage);
                },
                isLoggedIn: !isError,
                stripePromise,
            }}
        >
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(undefined)}
                />
            )}
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
  };