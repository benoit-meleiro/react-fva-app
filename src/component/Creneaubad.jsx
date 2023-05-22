
// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Creneaubad = ({creneau}) => {

  const [presentsData, setpresentsData] = useState([]);
useEffect(() => {
  fetch(`http://localhost:3002/sessions/${creneau.id}/present`)
    .then((presentsDataJson) => {
      return presentsDataJson.json();
    })
    .then((presentsDataJs) => {
      setpresentsData(presentsDataJs.data);
      
    });
}, []);

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
  };
  const GymnaseSession = (dayOfWeek) => {
    if (dayOfWeek === 'lun' || dayOfWeek === 'mar') {
      return 'Gymnase G Tillion 21h - 23h';
    } 
    if (dayOfWeek === 'mer') {
      return 'Gymnase G Tillion 20h30 - 22h30';
    } 
    if (dayOfWeek === 'jeu') {
      return 'Gymnase P Denis 21h - 23h';
    }  
    else {
       return 'Gymnase P Denis 19h - 21h';
    }
  };
const dayOfWeek = formatDate(creneau.dateSession).substring(0, 3); // Récupère le jour de la semaine en 3 caractères
const terrainDispo = (dayOfWeek) => {
    if ((creneau.matchsInterclubs === true && dayOfWeek === 'lun') || (creneau.matchsInterclubs === true &&dayOfWeek === 'mar') || (creneau.matchsInterclubs === true &&dayOfWeek === 'mer')){
        return `4`
    }
    if (creneau.matchsInterclubs == false && dayOfWeek === 'lun' || dayOfWeek === 'mar' || dayOfWeek === 'mer'){
      return `7`
  }
  if (dayOfWeek === 'jeu' || dayOfWeek === 'ven'){
    return `5`
}
}  
  return (
    <div key={creneau.id} className="creneau-de-bad col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-vert bg-fva-terrain">
            {/* <h2 className="text-white text-center">{creneau.jourSession}{creneau.dateSession}</h2> */}
            <h2 className="text-white text-center text-uppercase ">{formatDate(creneau.dateSession)}</h2>
            <div className="d-flex align-items-center justify-content-center">
              <img src={`/img/${creneau.nomResponsableOuverture}_${creneau.prenomResponsableOuverture}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline align-text-top rounded-pill mx-3"/>
              <p className="d-inline text-white"><span className="fw-bold">{creneau.nomResponsableOuverture}</span> est le responsable de cette session</p>
              {/* <p className="d-inline text-white"><span className="fw-bold">{creneau.nomResponsableOuverture}</span> est le responsable de cette session</p> */}
            </div>
            <p className="text-white fw-normal text-center">{GymnaseSession(dayOfWeek)}</p>
            <div className="separator"></div>
            <div className="d-flex flex-row text-white justify-content-evenly align-items-center">
              <p className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-center fs-4 fw-semibold lh-1"><span className="display-6 fw-bold">{terrainDispo(dayOfWeek)}</span> <br/>TERRAINS<br/>DISPONIBLES</p>
              <p className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-center fs-4 fw-semibold lh-1"><span className="display-6 fw-bold">{(presentsData.length)+1}</span><br/>JOUEURS<br/>INSCRITS</p>
            </div>
            <div className="text-center mt-3">
              <label className="switch">
              <input type="checkbox"></input>
              <span className="slider"></span>
              <span className="text" data-checked-text="Ok je viens !" data-unchecked-text="J'ai Aqua Poney !"></span>
              </label>
            </div>
            <h3 className="text-white text-center">QUI SERA LA ?</h3>
            <div className="row justify-content-center text-white gap-1">
            <div className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
    <img src={`/img/${creneau.nomResponsableOuverture}_${creneau.prenomResponsableOuverture}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill" />
    <p className="mb-0 lh-1 fs-6 text-center">{creneau.nomResponsableOuverture}</p>
  </div>


          {presentsData.map((present) => (
            
  <div className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
    <img src={`/img/${present.photos}`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill" />
    <p className="mb-0 lh-1 fs-6 text-center">{present.firstName}</p>
  </div>
))}




              
              

            </div>
          </div>
  );
};

export default Creneaubad;