import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowDownLeft } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link className="back-link" to="/register">
            <FiArrowDownLeft size={15} color="#E02041" />
            Voltar para
          </Link>
        </section>
        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}

export default Register;
