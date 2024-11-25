import { createContext, useState } from "react";

export const DataContext = createContext();
const DataProvider = ({children})=>{
    const [qns, setQns]=useState("Loading...");
    const [ans, setAns]=useState(null);
    return(
        <DataContext.Provider value={{qns, setQns, ans, setAns}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider