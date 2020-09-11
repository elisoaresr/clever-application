import React from 'react';
import './styles.css';

import logo from '../../assets/logo.png';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header className="header">

          <ul className="menu clearfix">
            <li><a href="#">Empresa</a>
             Nível 1
             submenu
            <ul className="sub-menu clearfix">
                <li><a href="#">Sub</a>
                     Nível 2
                     submenu do submenu
                    <ul className="sub-menu">
                    <li><a href="#">Sub Sub</a>
                             Nível 3
                             submenu do submenu do submenu
                            <ul className="sub-menu">
                        <li><a href="#">Sub Sub</a></li>
                        <li><a href="#">Sub Sub</a></li>
                        <li><a href="#">Sub Sub</a></li>
                        <li><a href="#">Sub Sub</a></li>
                        <li><a href="#">Sub Sub</a></li>
                      </ul> submenu do submenu do submenu
                        </li>
                    <li><a href="#">Sub Sub</a></li>
                    <li><a href="#">Sub Sub</a></li>
                    <li><a href="#">Sub Sub</a></li>
                    <li><a href="#">Sub Sub</a></li>
                  </ul> submenu do submenu
                </li>
                <li><a href="#">Sub</a></li>
                <li><a href="#">Sub</a></li>
                <li><a href="#">Sub</a></li>
                <li><a href="#">Sub</a></li>
                <li><a href="#">Sub</a></li>
              </ul> submenu
        </li>
            <li><a href="#">Segurança</a></li>
            <li><a href="#">Ajuda</a></li>
            <li><a href="#">COVID-19 (Recursos)</a></li>
          </ul>
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