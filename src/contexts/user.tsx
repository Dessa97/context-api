// Importa tipos e funções do React:
// - ReactNode: tipo que representa qualquer elemento React válido (JSX, texto, componentes, etc.)
// - createContext: usado para criar um contexto (compartilhar dados entre componentes)
// - useState: hook para criar e gerenciar estados
import { ReactNode, createContext, useState } from "react";

// Define a interface para as propriedades que o componente UserProvider recebe.
// "children" representa o conteúdo que será passado dentro do UserProvider (componentes filhos).
interface UserProviderProps {
  children: ReactNode;
}

// Define o formato dos dados que estarão disponíveis dentro do contexto.
type UserContextData = {
  aluno: string;
  qtdAlunos: number;
  mudaNome: (nome: string) => void;
  novoAluno: () => void;
};

// Cria o contexto UserContext com um valor inicial vazio, mas dizendo ao TypeScript
// que ele terá a estrutura definida em UserContextData.
export const UserContext = createContext({} as UserContextData);

// Define o componente UserProvider, que vai prover (fornecer) o contexto para os componentes filhos.
function UserProvider({ children }: UserProviderProps) {
  // Cria um estado "aluno" com valor inicial "Andressa Oliveira"
  const [aluno, setAluno] = useState("Andressa Oliveira");

  // Cria um estado "qtdAlunos" com valor inicial 28
  const [qtdAlunos, setQtdAlunos] = useState(28);

  // Função que atualiza o estado "aluno" para o nome passado como parâmetro
  function mudaNome(nome: string) {
    setAluno(nome);
  }

  // Função que incrementa o estado "qtdAlunos" em +1
  function novoAluno() {
    setQtdAlunos((alunos) => alunos + 1);
  }

  // Retorna o Provider do contexto.
  // Todos os componentes filhos que estiverem dentro do UserProvider terão acesso
  // a "aluno", "qtdAlunos", "mudaNome" e "novoAluno".
  return (
    <UserContext.Provider value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
      {children}
    </UserContext.Provider>
  );
}

// Exporta o UserProvider para ser usado em outros arquivos (como no App.tsx)
export default UserProvider;
