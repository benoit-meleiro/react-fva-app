import React, { useEffect, useState } from 'react';

const Compomatch = ({club}) => {

  const [presentInterData, setPresentInterData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3002/clubs/3/presentinter`)
      .then((presentInterDataJson) => {
        return presentInterDataJson.json();
      })
      .then((presentInterDataJs) => {
        setPresentInterData(presentInterDataJs.data);
        
      });
  }, []);
  
    const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', options);
    };
    // const GymnaseSession = (dayOfWeek) => {
    //   if (dayOfWeek === 'lun' || dayOfWeek === 'mar') {
    //     return 'Gymnase G Tillion 21h - 23h';
    //   } 
    //   if (dayOfWeek === 'mer') {
    //     return 'Gymnase G Tillion 20h30 - 22h30';
    //   } 
    //   if (dayOfWeek === 'jeu') {
    //     return 'Gymnase P Denis 21h - 23h';
    //   }  
    //   else {
    //      return 'Gymnase P Denis 19h - 21h';
    //   }
    // };
  // const dayOfWeek = formatDate(creneau.dateSession).substring(0, 3); // Récupère le jour de la semaine en 3 caractères
  const recDep= club.receptionInter == true ? "Domicile" : "Déplacement";
  
      return (
      
        <div class="creneau-de-bad col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu-f bg-fva-terrain">
        <p className="text-white text-center mt-2 fw-bold"><span className="bg-fva-bleu-f px-1"><span className="fs-6 fw-light"> Equipe {club.equipe} - </span>MATCH #{club.numeroMatch}<span className="fs-6 fw-light"> - {recDep}</span></span> </p>
        <h2 class="text-white text-center mt-1 text-uppercase">{formatDate(club.dateInter)}</h2>
        <h4 class="text-white fw-bold text-center m-0">{club.adversaireInter}</h4>
        <p class="text-white fw-normal text-center">{club.heureInter} - {club.lieuInter}</p>
        <h3 class="text-white text-center text-uppercase my-2">JOUEURS disponibles</h3>
        <div class=" d-flex flex-row  flex-wrap justify-content-around text-white">
          <div class="row justify-content-center text-white gap-1">
            
            {presentInterData.map((present) =>
            (
              <div class="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
              <img src={`/img/${present.photos}`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" class="d-inline-block align-text-top rounded-pill "/>
              <p class=" mb-0 lh-1 fs-6 text-center">{present.firstName}</p>
            </div>
            ))}
            
            
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
  );
};

export default Compomatch;