import React, { useState } from "react";
import "./cadastro.css";
import { FaUser, FaEnvelope, FaLock, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você colocaria sua lógica de envio (ex: fetch ou axios)
    // Simulando sucesso no cadastro:
    setMensagem("Cadastro realizado com sucesso!");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>CADASTRO DE USUÁRIO</h2>
        <p className="subtitle">• central de comando da cidade inteligente</p>

        <div className="input-group">
          <FaUser className="icon" />
          <input type="text" placeholder="Nome Completo" className="input" />
        </div>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="E-mail" className="input" />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input type="password" placeholder="Senha" className="input" />
        </div>

        <div className="input-group">
          <FaLightbulb className="icon" />
          <input type="password" placeholder="Confirmação de Senha" className="input" />
        </div>

        <div className="user-type">
          <label><input type="radio" name="tipo" /> Administrador</label>
          <label><input type="radio" name="tipo" /> Técnico de Manutenção</label>
          <label><input type="radio" name="tipo" /> Aluno Explorador</label>
        </div>

        <select className="select">
          <option>Departamento/Localização</option>
          <option>Administrador</option>
          <option>Aluno</option>
          <option>Professor</option>
        </select>

        <button type="submit" className="btn-cadastrar">CADASTRAR</button>
        <p className="login-link" onClick={() => navigate("/login")}>Já tenho conta</p>


        {mensagem && <p className="mensagem-sucesso">{mensagem}</p>}
      </form>
    </div>
  );
}
