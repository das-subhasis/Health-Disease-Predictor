import { createContext, useState } from "react";

export const ThemeContext = createContext({ isDark: false })

export const ThemeContextProvider = ({ children }) => {
    const [dark, setDark] = useState(false)
    return (<ThemeContext.Provider value={{isDark: dark}}>
        { children }
    </ThemeContext.Provider >)
}