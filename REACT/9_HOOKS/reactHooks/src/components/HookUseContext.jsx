import { createContext } from "react";

export const SeomeContext= createContext();


export const HookUseContext = ({children}) => {
const contextValue ="Testing context";

  return (
     <SeomeContext.Provider value={{contextValue}}>
        {children}
     </SeomeContext.Provider>
  )
}

export default HookUseContext