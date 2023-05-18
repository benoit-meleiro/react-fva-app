import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo-fva-navbar-footer.svg'

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
        <div class="d-flex flex-row gap-3">
          <div class="col-lg-1 col-xl-1">
              <a class="align-middle m-auto" href="./index.html"><img src={logo} alt="Logo" width="64" height="64" /></a>
          </div>
          <div class="col-lg-11 col-xl-11 justify-content-start lh-65">
              <a class="d-inline-block px-5 text-decoration-none  text-dark"  href="./index.html">Mentions Légales</a>
              <a class="d-inline-block px-5 text-decoration-none text-dark" href="./index.html">Statuts</a>
              <a class="d-inline-block px-5 text-decoration-none text-dark" href="./index.html">Réglement Intérieur</a>
              <a class="d-inline-block px-5 text-decoration-none text-dark" href="./index.html">Plan du site</a>
              <a class="d-inline-block px-5 text-decoration-none text-dark" href="./index.html">FAQ</a>
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