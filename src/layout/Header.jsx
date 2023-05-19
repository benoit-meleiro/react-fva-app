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
                    <Link className="navbar-brand" to={`/`}><img src={logo} alt="Logo" width="64" height="64" className="d-inline-block align-text-top"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-link active text-uppercase" aria-current="page" to={`/`}>Accueil</Link>
                        <Link className="nav-link text-uppercase" to={`/club`}>le club</Link>
                        <Link className="nav-link text-uppercase" to={`/adhesions`}>adhésions</Link>
                        <Link className="nav-link text-uppercase" to={`/contact`}>contact</Link>
                        <Link className="nav-link text-uppercase" to={`/login`}><img src={logoConnexion} alt="Logo" width="36" height="36" className="d-inline-block align-text-top"/></Link>
                        </div>
                    </div>
                </div>
                
            </nav>
            
        </div>
    </header>
  );
};

export default Header;