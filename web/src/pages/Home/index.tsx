import React from 'react';
import './styles.css';

import 'font-awesome/css/font-awesome.min.css'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="header">
          <nav className="c2">
            <ul className="menu clearfix">
              <li><a href="#">Empresa</a>
             Nível 1
             submenu
            <ul className="sub-menu clearfix">
                  <li><a href="#">Quem somos</a></li>
                  <li><a href="#">Como o clever Funciona?</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Carreiras</a></li>
                  <li><a href="#">Investidores</a></li>
                </ul> submenu
            </li>
              <li><a href="#">Segurança</a></li>
              <li><a href="#">Ajuda</a></li>
              <li><a href="#">COVID-19 (Recursos)</a></li>
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