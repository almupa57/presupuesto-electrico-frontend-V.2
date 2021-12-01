import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logomision.png";

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-container">
        <div className="site-title">
          <h1>Diseñaste?...!Yo te lo presupuesto¡</h1>
        </div>

        {/* <!-- Inicio menú navegación --> */}
        <nav className="site-nav">
          <Link to="/" className="link">
            <a className="link-header" href="#">
              Inicio
            </a>
          </Link>
          <a href="#services.html">Servicios</a>
          <a href="#news">Noticias</a>
          <a href="#team">Nuestro equipo</a>
        </nav>
        {/* <!-- Fin menú navegación --> */}

        <div className="logo-container">
          <img
            className="logo-container__site-logo"
            src={logo}
            alt="Logo MisionTic 2022"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
