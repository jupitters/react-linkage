import { createContext, useContext, useState } from "react";

const ContextApi = createContext()

export const ContextProvider = ({ children }) => {
    const getToken = localStorage.getItem("jwt_token") ? JSON.parse(localStorage.getItem("jwt_token")): null
    const [token, setToken] = useState(getToken)

    const sendData = {
        token,
        setToken,
    }

    return <ContextApi.Provider value={sendData}>{ children }</ContextApi.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStoredContext = () => {
    const context = useContext(ContextApi)
    return context;
}