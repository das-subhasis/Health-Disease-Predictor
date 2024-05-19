import { createContext, useState } from "react";

export const DiseaseContext = createContext()

export const DiseaseContextProvider = ({ children }) => {
    const [selected, setSelected] = useState([])
    const [result, setResult] = useState('')
    return (<DiseaseContext.Provider value={{selected, result, setSelected, setResult }}>
        { children }
    </DiseaseContext.Provider >)
}