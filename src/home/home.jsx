import React from "react";
import "./home.css";

const Home = () => {
  const handleClick = (title) => {
    alert(`Você clicou em: ${title}`);
  };

  return (
    <div className="home">
      <img src="./imagens/cidades-inteligentes.jpg" alt="Cabeçalho" />

      <h1 className="main-title">CIDADE INTELIGENTE</h1>
      <p className="sub-title">
        Central de comando digital da Escola e Faculdade<br />
        de Tecnologia Senai Roberto Mange
      </p>


      <div className="grid">
        <button className="card" onClick={() => handleClick("Exploração Tecnológica")}>
          <h2>EXPLORAÇÃO TECNOLÓGICA</h2>
          <p>Sensores, redes Wi-Fi, banco de dados, aplicativos</p>
        </button>
        <button className="card" onClick={() => handleClick("Desafios e Metodologias Ágeis")}>
          <h2>DESAFIOS E METODOLOGIAS ÁGEIS</h2>
          <p>Coleta e integração de dados, sprints dinâmicos</p>
        </button>
        <button className="card" onClick={() => handleClick("Conectando a Cidade")}>
          <h2>CONECTANDO A CIDADE</h2>
          <p>Salas monitoradas pelos ESP32 e rede Wi-Fi</p>
        </button>
        <button className="card" onClick={() => handleClick("Comando Central")}>
          <h2>COMANDO CENTRAL</h2>
          <p>Painel administrativo com visão do ambiente</p>
        </button>
        <footer>
          <p>© 2025 Seu Projeto. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>

  );
};

export default Home;
