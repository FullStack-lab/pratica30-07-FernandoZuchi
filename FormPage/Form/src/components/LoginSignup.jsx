// Importa os estilos do componente
import './LoginSignup.css';

// Importa as imagens usadas nos campos de entrada
import email from '../assets/email.png';
import password from '../assets/password.png';
import person from '../assets/person.png';

// Importa o hook useState do React para gerenciar o estado do componente
import { useState } from 'react';

// Componente de login e cadastro
const LoginSignup = () => {
    // Define o estado inicial do componente, que será "Cadastre-se"
    const [action, setAction] = useState("Cadastre-se");

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
                    <img src={email} alt="" />
                    <input type="email" placeholder='E-mail' />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Senha' />
                </div>
            </div>
            {/* Renderiza a mensagem "Esqueceu a senha?" somente se a ação for "Login" */}
            {action === "Cadastre-se" ? <div></div> : <div className="forgot-password">Esqueceu a senha? <span>Clique aqui!</span></div>}
            {/* Seção dos botões de ação */}
            <div className="submit-container">
                {/* Botão de "Cadastre-se" */}
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Cadastre-se")}>
                    Cadastre-se
                </div>
                {/* Botão de "Login" */}
                <div className={action === "Cadastre-se" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
                    Login
                </div>
            </div>
        </div>
    )
}

// Exporta o componente LoginSignup para uso em outras partes da aplicação
export default LoginSignup;