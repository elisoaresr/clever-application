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
              <nav className="items-grid">
                
              </nav>
        </header>

        <main>
          <h1>Sua plataforma de entrega inteligente</h1>
          <p>Ajudamos você trazendo comodidade em suas compras</p>
        </main>

        <div className="footer">
          <p>© 2020 Clever Technologies Inc</p>
        </div>
      </div>
    </div>
  );
}

export default Home;