import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="header">
          <img src={logo} alt="logo" />
            <nav id="menu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Cadastre-se</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
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