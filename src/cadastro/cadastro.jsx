import React from "react";
import "./cadastro.css";
import { FaUser, FaEnvelope, FaLock, FaLightbulb } from "react-icons/fa";

export default function Cadastro() {
  return (
    <div className="container">
      <form className="form-box">
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
        <a href="#" className="login-link">Já tenho conta</a>
      </form>
    </div>
  );
}
