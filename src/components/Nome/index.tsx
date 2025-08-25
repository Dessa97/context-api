// Importa o contexto que criamos em "contexts/user"
import { UserContext } from "../../contexts/user";

// Importa o hook useContext do React, usado para consumir valores de um contexto
import { useContext } from "react";
// Define o componente funcional Nome
export function Nome() {
  // Usa o hook useContext para acessar os valores do UserContext.
  // Aqui fazemos uma desestruturação e pegamos apenas a propriedade "aluno".
  const { aluno } = useContext(UserContext);

  return (
    <div>
      {/* Mostra o valor de "aluno" vindo do contexto */}
      <strong>Aluno:{aluno}</strong>
      <br />
    </div>
  );
}
