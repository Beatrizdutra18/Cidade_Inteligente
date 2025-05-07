import React from "react";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">ENTRAR NA CIDADE INTELIGENTE</h2>

        <form className="login-form">
          <div>
            <div className="input-field">
              <FiMail className="icon" />
              <input type="email" placeholder="E-mail" />
            </div>
          </div>

          <div>
            <div className="input-field">
              <FiLock className="icon" />
              <input type="password" placeholder="Senha" />
            </div>
          </div>

          <div className="forgot-password">
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button className="login-button" type="submit">
            ENTRAR <FiArrowRight style={{ marginLeft: "8px" }} />
          </button>

          <div className="register-link">
            Ainda não tem uma conta? <a href="#">Cadastre-se</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
