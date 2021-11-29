import React, {createContext,ReactNode,useState} from "react"
import { PessoaDTO, PessoaFormikDTO } from "../model/PessoaDTO"

interface IPessoaContext{
  listPessoas:PessoaDTO['pessoa'];
  setListPessoas:React.Dispatch<React.SetStateAction<PessoaDTO['pessoa']>>
  pessoaAEditar:PessoaFormikDTO;
  setPessoaAEditar:React.Dispatch<React.SetStateAction<PessoaFormikDTO>>
}

const PessoaContext = createContext<IPessoaContext>({} as IPessoaContext);

const PessoaProvider : React.FC<ReactNode> = ({children}) =>{

  const [listPessoas,setListPessoas] = useState<PessoaDTO['pessoa']>([])
  const [pessoaAEditar, setPessoaAEditar] = useState({} as PessoaFormikDTO)

  return(
    <PessoaContext.Provider value={{listPessoas,setListPessoas, pessoaAEditar, setPessoaAEditar}}>
      {children}
    </PessoaContext.Provider>
  )
}

export {PessoaContext, PessoaProvider}
