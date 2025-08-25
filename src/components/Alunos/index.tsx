// Importa o contexto que criamos em "contexts/user"
import { UserContext } from "../../contexts/user";

// Importa o hook useContext, usado para consumir dados do contexto
import { useContext } from "react";

// Importa o componente Nome, que também vai usar o contexto
import { Nome } from "../Nome";

export function Alunos() {
  // Usa o hook useContext para acessar o contexto UserContext.
  // Aqui pegamos duas coisas do contexto: 
  // - qtdAlunos: número atual de alunos
  // - mudaNome: função que permite mudar o nome do aluno
  const { qtdAlunos, mudaNome } = useContext(UserContext);

  return (
    <div>
      {/* Mostra a quantidade de alunos vinda do contexto */}
      <h3>Quantidade Alunos: {qtdAlunos}</h3>

      {/* Botão que, quando clicado, chama mudaNome("Rafael"),
          alterando o nome do aluno no contexto */}
      <button onClick={() => mudaNome("Rafael")}>Muda Nome</button>

      <br />
      <br />
      <Nome />
    </div>
  );
}
