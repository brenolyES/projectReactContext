export interface PessoaDTO {
  pessoa: {
    cpf: string,
    dataNascimento: string,
    email: string,
    idPessoa: number,
    nome: string
  }[]
};

export interface PessoaFormikDTO {
    cpf: string,
    dataNascimento: string,
    email: string,
    idPessoa?: number,
    nome: string
};