import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import StudentArea from './pages/StudentHome';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/signin"><SignIn /></Route>
        <Route exact path="/signup"><SignUp /></Route>
        <Route exact path="/student"><StudentArea /></Route>
      </Switch>
    </div>
  );
}

export default App;


// Quais bibliotecas eu vou utilizar?
  //Material UI, Material Icons, React Hook Form + Yup, React Router DOM

// Quais páginas o usuário poderá acessar sem ter feito login?


// Qual será a estruturação visual dessas páginas?
  //

// Você vai utilizar alguma biblioteca de componentes?
  //Materual UI

// Estou ciente de quais endpoints irei utilizar? 


// Quais verbos http preciso utilizar e o que ele recebe em seu corpo da requisição?
  //



// Features necessárias na entrega
// O usuário pode se cadastrar
  // Página Inicial - Cadastro ===> Página de formulário (Voltar/Cadastrar)
// O usuário pode logar em sua conta
  // Página Inicial - Login ===> Página de Login (Voltar/Entrar) ===> Página do Aluno (Informações pessoais/ Tecnologias/ Logout)
// O usuário pode cadastrar as tecnologias que ele conhece
  
// O usuário consegue visualizar e deletar as tecnologias que ele conhece



// Regras de negócio
// Todos os formulários tem validações, para não enviar nenhum dado errado para a API.
// O Token está sendo salvo no localStorage de forma correta e sendo utilizado para verificar se o usuário está logado ou não.
// O usuário deslogado não pode acessar a aplicação core