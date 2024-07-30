import "./Background.css"; // Importa o arquivo de estilos CSS para o componente
import video1 from "../../assets/video1.mp4"; // Importa o arquivo de vídeo para o fundo
import image1 from "../../assets/image1.png"; // Importa a primeira imagem de fundo
import image2 from "../../assets/image2.png"; // Importa a segunda imagem de fundo
import image3 from "../../assets/image3.png"; // Importa a terceira imagem de fundo

const Background = ({ playStatus, heroCount }) => {
    // Verifica se o playStatus está ativado
    if (playStatus) {
        // Se playStatus for verdadeiro, renderiza o vídeo como fundo
        return (
            <video className="background fade-in" autoPlay loop muted>
                <source src={video1} type="video/mp4" /> {/* Define o vídeo a ser reproduzido */}
            </video>
        );
    } 
    // Se playStatus não estiver ativado, verifica o valor de heroCount
    else if (heroCount === 0) {
        // Se heroCount for 0, renderiza a primeira imagem como fundo
        return <img src={image1} className="background fade-in" alt="Background Image 1" />;
    } 
    else if (heroCount === 1) {
        // Se heroCount for 1, renderiza a segunda imagem como fundo
        return <img src={image2} className="background fade-in" alt="Background Image 2" />;
    } 
    else if (heroCount === 2) {
        // Se heroCount for 2, renderiza a terceira imagem como fundo
        return <img src={image3} className="background fade-in" alt="Background Image 3" />;
    }
}

export default Background; // Exporta o componente para ser utilizado em outras partes da aplicação