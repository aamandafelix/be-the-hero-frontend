import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {
  const history = useHistory();
  
  const [id, setId] = useState('');

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
   <div className="logon-container">
     <section className="form">
      <img src={logoImg} alt="Be The Hero" />

      <form onSubmit={handleLogin}>
        <h1>Faça seu logon</h1>

        <input 
          placeholder="Sua ID"
          value={id}
          onChange={event => setId(event.target.value)}
        />
        <button className="button" type="submit">Entrar</button>

        <Link className="back-link" to="/register">
          <FiLogIn size={15} color="#E02041" />
          Não tenho cadastro
        </Link>
      </form>
     </section>
     <img src={heroesImg} alt="Heroes" />
   </div>
  )
}

export default Logon;