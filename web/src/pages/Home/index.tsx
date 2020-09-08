import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="header">
            <img src={logo} alt="logo" />

            <nav className="menu">
              <Link to="/">
               <span>Início</span> 
            </Link>
              <Link to="/">
              <span>Serviços</span> 
            </Link>
              <Link to="/">
              <span>Sobre nós</span> 
            </Link>
              <Link to="/">
              <span>Contato</span> 
            </Link>
            </nav>
        </header>

        <main>
          <h1>Seu mercado inteligente</h1>
          <p>Ajudamos você trazendo comodidade em suas compras</p>
        </main>

        <div className="footer">
          <p>Desenvolvido por Eliezer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;