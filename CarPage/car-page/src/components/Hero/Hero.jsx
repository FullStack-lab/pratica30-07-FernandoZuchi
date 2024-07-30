// Importa o arquivo de estilo CSS para o componente Hero
import "./Hero.css";

// Importa as imagens dos ícones e botões
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

// Define o componente Hero que recebe várias propriedades
const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero">
        {/* Renderiza o texto do hero */}
        <div className="hero-text">
             <p>{heroData.text1}</p>
             <p>{heroData.text2}</p>
        </div>
        {/* Renderiza a seção de exploração */}
        <div className="hero-explore">
            <p>Explore the features</p>
            <img src={arrow_btn} alt="Explore Button"/>
        </div>
        {/* Renderiza os pontos de navegação e o controle de vídeo */}
        <div className="hero-dot-play">
            <ul className="hero-dots">
                {/* Pontos de navegação para alternar entre os heróis */}
                <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
                <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
            </ul>
            <div className="hero-play">
                {/* Botão de Play/Pause para o vídeo */}
                <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt="Play/Pause Button"/>
                <p>See the video</p>
            </div>
        </div>
    </div>
  );
}

// Exporta o componente Hero como padrão
export default Hero;