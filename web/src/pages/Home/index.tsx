import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="header">
            <img src={logo} alt="logo" />
              <nav className="menu">
                <Link to="/">
                <span>Empresa</span> 
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
          <h1>Sua plataforma de entrega inteligente</h1>
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