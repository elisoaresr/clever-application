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
          <nav className="items-grid-a">
            <ul className="menu-c1">
              <li><a href="#">Empresa</a></li>
              <ul>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Como o Clever funciona?</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Carreiras</a></li>
                <li><a href="#">Relação com Investidores</a></li>
              </ul>
            </ul>
            <ul className="menu-c2">
              <li><a href="#">Segurança</a></li>
            </ul>
            <ul className="menu-c3">
              <li><a href="#">Ajuda</a></li>
            </ul>
            <ul className="menu-c4">
              <li><a href="#">Covid-19 (Recursos)</a></li>
            </ul>
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