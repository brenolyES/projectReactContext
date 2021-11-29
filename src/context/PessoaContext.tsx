import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  listPessoas:PessoaDTO['pessoa'];
  setListPessoas:React.Dispatch<React.SetStateAction<PessoaDTO['pessoa']>>
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{
  const [listPessoas,setListPessoas] = useState<PessoaDTO['pessoa']>([])
  return(
    <PessoaContext.Provider value={{listPessoas,setListPessoas}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext, PessoaProvider}
