// Importa o hook useContext, usado para acessar dados do contexto
import { useContext } from "react";

// Importa o contexto UserContext, que contém os dados compartilhados
import { UserContext } from "../../contexts/user";

export function Footer() {
  // Usa useContext para acessar duas coisas do contexto:
  // - qtdAlunos: número de alunos no momento
  // - novoAluno: função que adiciona +1 ao número de alunos
  const { qtdAlunos, novoAluno } = useContext(UserContext);

  return (
    <footer>
      <hr />

      <h3>Footer</h3>

      <h4>Aluno online na plataforma: {qtdAlunos}</h4>

      {/* Botão que, quando clicado, chama a função novoAluno(),
          que incrementa qtdAlunos em +1 */}
      <button onClick={() => novoAluno()}>Novo aluno</button>
    </footer>
  );
}
