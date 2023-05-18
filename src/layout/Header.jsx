import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo-fva-navbar-footer.svg'
import logoConnexion from '../img/connexion-espace-joueurs.png'

const Header = () => {
  return (
    <header>
        <div className="container-fluid px-0 py-0 mx-auto">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <a className="navbar-brand" href="./index.html"><img src={logo} alt="Logo" width="64" height="64" className="d-inline-block align-text-top"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <a className="nav-link active text-uppercase" aria-current="page" href="index.html">Accueil</a>
                        <a className="nav-link text-uppercase" href="le_club.html">le club</a>
                        <a className="nav-link text-uppercase" href="adhesions.html">adhésions</a>
                        <a className="nav-link text-uppercase" href="contact.html">contact</a>
                        <a className="nav-link text-uppercase" href="connexion.html"><img src={logoConnexion} alt="Logo" width="36" height="36" className="d-inline-block align-text-top"/></a>
                        </div>
                    </div>
                </div>
                
            </nav>
            
        </div>
    </header>
  );
};

export default Header;