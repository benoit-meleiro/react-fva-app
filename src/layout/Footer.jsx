import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo-fva-navbar-footer.svg'

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
        <div class="d-flex flex-row gap-3">
          <div class="col-lg-1 col-xl-1">
              <Link class="align-middle m-auto" to={`/`}><img src={logo} alt="Logo" width="64" height="64" /></Link>
          </div>
          <div class="col-lg-11 col-xl-11 justify-content-start lh-65">
              <Link class="d-inline-block px-5 text-decoration-none  text-dark"  to={`/`}>Mentions Légales</Link>
              <Link class="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>Statuts</Link>
              <Link class="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>Réglement Intérieur</Link>
              <Link class="d-inline-block px-5 text-decoration-none text-dark" to={`/espace/creneaux`}>Compteur points</Link>
              <Link class="d-inline-block px-5 text-decoration-none text-dark" to={`/`}>FAQ</Link>
          </div>
        </div>
        <div class="text-center">
          <span class="text-body-secondary">Copyright FVA 2023</span>
        </div>
      </div>
    </footer>   
  );
};

export default Footer;