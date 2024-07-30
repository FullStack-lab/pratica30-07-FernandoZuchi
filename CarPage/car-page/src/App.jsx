import React, { useEffect, useState } from 'react'; // Importa React e hooks necessários
import Background from './components/Background/Background'; // Importa o componente Background
import Navbar from './components/Navbar/Navbar'; // Importa o componente Navbar
import Hero from './components/Hero/Hero'; // Importa o componente Hero

const App = () => {
  // Define os dados para o componente Hero
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  // Cria um estado para controlar o índice da imagem ou vídeo de fundo
  const [heroCount, setHeroCount] = useState(2);

  // Cria um estado para controlar o status de reprodução do vídeo
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    // Define um intervalo que muda o índice do herói a cada 3 segundos
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 3000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Renderiza o componente Background, passando os estados playStatus e heroCount */}
      <Background playStatus={playStatus} heroCount={heroCount} />
      
      {/* Renderiza o componente Navbar */}
      <Navbar />
      
      {/* Renderiza o componente Hero, passando os dados e estados necessários */}
      <Hero 
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;