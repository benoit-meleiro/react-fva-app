import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"
import MembreEq from "../../component/MembreEq";
import Matchinter from "../../component/Matchinter";


const Compointerclub = () => {return (
 <>
    <Header/>
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div class="separator"></div>
        <Menuconnex/>
        <div class="separator"></div>
      <p class="text-center text-uppercase fw-bold color-fvaBleu">tu es captaine de l’équipe 1 des fous du volants</p>
      <div class="separator"></div>
      <div class="d-flex flex-row flex-wrap justify-content-center align-items-center gap-2">
        {/* <!-- créneau de badminton --> */}
        <div class="creneau-de-bad col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu-f bg-fva-terrain">
          <p class="text-white text-center mt-2 fw-bold"><span class="bg-fva-bleu px-1">MATCH #1<span class="fs-6">- à domicile</span></span> </p>
          <h2 class="text-white text-center mt-1">LUNDI 10 AVRIL</h2>
          <h4 class="text-white fw-bold text-center m-0">LES BAUZIBADS</h4>
          <p class="text-white fw-normal text-center">20 H 30 - COLLEGE GERMAINE TILLION - 31840 AUSSONNE</p>
          <h3 class="text-white text-center text-uppercase my-2">JOUEURS disponibles</h3>
          <div class=" d-flex flex-row  flex-wrap justify-content-around text-white">
            <div class="row justify-content-center text-white gap-1">
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-jlp.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Jean-Luc</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-stephane.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Stéphane</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-cecile.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Cécile</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-will.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Wilfrid</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-yann.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Yann</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-sabrina.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Sabrina</p>
              </div>
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-stephanie.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Stéphanie</p>
              </div>
              <h3 class="text-white text-center text-uppercase my-1">JOUEURS non disponibles</h3>

              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
                <img src="./assets/img/bureau-fva-marion.jpg" alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
                <p class=" mb-0 lh-1 fs-6 text-center">Marion</p>
              </div>
          </div>
          </div>
          <h3 class="text-white text-center text-uppercase my-1">sélection des joueurs</h3>
          <div class="separator"></div>
          <div class="d-flex flex-row flex-wrap justify-content-start align-items-center gap-2">
          {/* <!-- SIMPLE HOMME 1    --> */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">simple<br/>homme 1</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                    <option value=""></option>
                    <option value="joueur 1">Jean-Luc</option>
                    <option value="joueur 2">Stéphane</option>
                    <option value="joueur 3">Wilfrid</option>
                    <option value="joueur 4">Yann</option>
                </select>
              </p>
              <p class="col-4"></p>
            </div>    
          {/* <!-- SIMPLE HOMME 2    -->     */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">simple<br/>homme 2</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Jean-Luc</option>
                  <option value="joueur 2">Stéphane</option>
                  <option value="joueur 3">Wilfrid</option>
                  <option value="joueur 4">Yann</option>
              </select>
              </p>
              <p class="col-4"></p>
            </div>
          {/* <!-- SIMPLE DAME    -->   */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">simple<br/>dame</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Cécile</option>
                  <option value="joueur 2">Sabrina</option>
                  <option value="joueur 3">Stéphanie</option>
                </select>
              </p>
              <p class="col-4"></p>
            </div>
          {/* <!-- DOUBLE HOMME    -->   */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">double<br/>homme</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Jean-Luc</option>
                  <option value="joueur 2">Stéphane</option>
                  <option value="joueur 3">Wilfrid</option>
                  <option value="joueur 4">Yann</option>
              </select>
              </p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Jean-Luc</option>
                  <option value="joueur 2">Stéphane</option>
                  <option value="joueur 3">Wilfrid</option>
                  <option value="joueur 4">Yann</option>
              </select>
              </p>
            </div>
          {/* <!-- DOUBLE DAME    -->   */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">double<br/>dame</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Cécile</option>
                  <option value="joueur 2">Sabrina</option>
                  <option value="joueur 3">Stéphanie</option>
                </select>
              </p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Cécile</option>
                  <option value="joueur 2">Sabrina</option>
                  <option value="joueur 3">Stéphanie</option>
                </select>
              </p>
            </div>
          {/* <!-- DOUBLE MIXTE 1    -->   */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">double<br/>Mixte 1</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Jean-Luc</option>
                  <option value="joueur 2">Stéphane</option>
                  <option value="joueur 3">Wilfrid</option>
                  <option value="joueur 4">Yann</option>
              </select>
              </p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Cécile</option>
                  <option value="joueur 2">Sabrina</option>
                  <option value="joueur 3">Stéphanie</option>
                </select>
              </p>
            </div>
          {/* <!-- DOUBLE MIXTE 2    -->   */}
            <div class="d-flex flex-row col-12 col-sm-12 col-md-12 col-lg-12">
              <p class="col-3 text-center fs-6 text-white text-uppercase fw-semibold lh-1">double<br/>mixte 2</p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Jean-Luc</option>
                  <option value="joueur 2">Stéphane</option>
                  <option value="joueur 3">Wilfrid</option>
                  <option value="joueur 4">Yann</option>
              </select>
              </p>
              <p class="col-4">
                <label for="pet-select"></label>
                <select  class="team-player-select" name="pets" id="pet-select">
                  <option value=""></option>
                  <option value="joueur 1">Cécile</option>
                  <option value="joueur 2">Sabrina</option>
                  <option value="joueur 3">Stéphanie</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </div></div>
    <div class="separator"></div>
    </main>
    <Footer/>
    </>
  );
};

export default Compointerclub;