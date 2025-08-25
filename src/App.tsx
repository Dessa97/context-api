
// Importa o componente UserProvider, que fornece um contexto (dados compartilhados)
// para os componentes filhos através da Context API
import UserProvider from "./contexts/user";

// Importa os componentes 
import { Alunos } from "./components/Alunos";
import { Footer } from "./components/footer";

// Define o componente principal da aplicação, chamado App
function App() {
  // A função retorna o que será renderizado na tela
  return (
    // Envolve todo o conteúdo em UserProvider, para que todos os componentes filhos
    // (Alunos e Footer) possam acessar os dados do contexto "user"
    <UserProvider>
      <div>
        <h1>Context API</h1>
        <br />
        <hr />
        <Alunos />
        <Footer />
      </div>
    </UserProvider>
  );
}

// Exporta o componente App como padrão (default) para que possa ser usado em outros arquivos
export default App;
