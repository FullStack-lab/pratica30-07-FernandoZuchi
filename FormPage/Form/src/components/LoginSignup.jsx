// Importa os estilos do componente
import './LoginSignup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// Importa as imagens usadas nos campos de entrada
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import person from '../assets/person.png';
// Importa o hook useState do React para gerenciar o estado do componente
import { useState } from 'react';
import { auth } from '../services/firebaseConfig'

// Componente de login e cadastro
const LoginSignup = () => {
    // Define o estado inicial do componente, que será "Cadastre-se"
    const [action, setAction] = useState("Cadastre-se");

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);

    function handleSignUp(e) {
        createUserWithEmailAndPassword(email, password);
        if (user) {
            console.log(user);
        }
    }

    function handleSignIn(e) {
        signInWithEmailAndPassword(email, password);
        if (user) {
            console.log(user);
        }
    }

    return (
        <div className='container'>
            {/* Seção do cabeçalho que exibe o título e uma linha embaixo */}
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            {/* Seção dos campos de entrada */}
            <div className="inputs">
                {/* Renderiza o campo de nome somente se a ação não for "Login" */}
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Nome' />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            {/* Renderiza a mensagem "Esqueceu a senha?" somente se a ação for "Login" */}
            {action === "Cadastre-se" ? <div></div> : <div className="forgot-password">Esqueceu a senha? <span>Clique aqui!</span></div>}
            {/* Seção dos botões de ação */}
            <div className="submit-container">
                {/* Botão de "Cadastre-se" */}
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { if (action === "Cadastre-se") handleSignUp(); setAction("Cadastre-se") }}>
                    Cadastre-se
                </div>
                {/* Botão de "Login" */}
                <div className={action === "Cadastre-se" ? "submit gray" : "submit"} onClick={() => { if (action === "Login") handleSignIn(); setAction("Login") }}>
                    Login
                </div>
            </div>
        </div>
    )
}

// Exporta o componente LoginSignup para uso em outras partes da aplicação
export default LoginSignup;