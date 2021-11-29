import React, { createContext, useState } from "react";


const CepContext = createContext({});

const CepProvider: React.FC<any> = ({children}) => {

  const [jsonCep, setJsonCep] = useState({});
  
  return(
    <CepContext.Provider value={{jsonCep, setJsonCep}}>
      {children}
    </CepContext.Provider>
  );
}

export {CepContext, CepProvider};