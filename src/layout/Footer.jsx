import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo-fva-navbar-footer.svg'

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-body-tertiary">
      <div className="container">
        <div className="d-flex flex-row gap-3">
          <div className="col-lg-1 col-xl-1">
              <Link className="align-middle m-auto" to={`/`}><img src={logo} alt="Logo" width="64" height="64" /></Link>
          </div>
          <div className="col-lg-11 col-xl-11 justify-content-start lh-65">
              <Link className="d-inline-block px-5 text-decoration-none  text-dark"  to={`/`}>Mentions Légales</Link>
              <Link className="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>Statuts</Link>
              <Link className="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>Réglement Intérieur</Link>
              <Link className="d-inline-block px-5 text-decoration-none text-dark" to={`/espace/creneaux`}>Compteur points</Link>
              <Link className="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>FAQ</Link>
          </div>
        </div>
        <div className="text-center">
          <span className="text-body-secondary">Copyright FVA 2023</span>
        </div>
      </div>
    </footer>   
  );
};

export default Footer;