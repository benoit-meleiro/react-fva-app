import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const Menuconnex = () => {

  const navigate = useNavigate();
  const [playerInfo, setPlayerInfo] = useState(null);

  // ! APPEL POUR AVOIR ID DU USER
useEffect (() => {
  
  const jwtToken = localStorage.getItem("jwt");
  const decodedToken = jwt_decode(jwtToken);
  const userId = decodedToken ? decodedToken.data : null;
  console.log(jwtToken)
  console.log(decodedToken)
  console.log(decodedToken.data)
  console.log(userId)
  
  fetch(`http://localhost:3002/players/${userId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    body: JSON.stringify(),})
    .then((playerInfoDataJson) => {
      return playerInfoDataJson.json();
    })
    .then((playersDataJs) => {
      setPlayerInfo(playersDataJs.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
  
}, []);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-vert ">
            <Link className="text-decoration-none" to={`/espace/creneaux`}><h4 className="text-white fw-bold text-center text-uppercase px-2 py-4">S'inscrire à un créneau de jeu <br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour tous les licenciés</span></h4></Link>
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu">
          {playerInfo && (playerInfo.roles.includes('admin') || playerInfo.roles.includes('capitaine') || playerInfo.roles.includes('équipe')) ?(
            <Link className="text-decoration-none" to={`/espace/dispointerclub`}><h4 className="text-white fw-bold text-center text-uppercase py-4">mes disponiblités interclubs<br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour les joueurs d'équipes</span></h4></Link>
            ) : null}
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu-f">
          {playerInfo && (playerInfo.roles.includes('admin') || playerInfo.roles.includes('capitaine')) ?(
            <Link className="text-decoration-none" to={`/espace/compointerclub`}><h4 className="text-white fw-bold text-center text-uppercase py-4">créer mon équipe Interclub<br/><span className="fs-6 text-white fw-lighter text-lowercase fst-italic">pour les capitaines d'équipes</span></h4></Link>
            ) : null}
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
          {playerInfo && playerInfo.roles.includes('admin') ? (
          <Link className="text-decoration-none" to={`/espace/admin/players`}>
            <h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">
              création & modif de joueurs
              <br />
              <span className="fs-6 fw-lighter text-lowercase fst-italic">
                accès administrateurs
              </span>
            </h4>
          </Link>
        ) : null}
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
          {playerInfo && playerInfo.roles.includes('admin') ? (
            <Link className="text-decoration-none" to={`/espace/admin/sessions`}><h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif créneaux<br/><span className="fs-6 fw-lighter text-lowercase fst-italic">accès administrateurs</span></h4></Link>
            ) : null}
          </div>
          <div className="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
          {playerInfo && playerInfo.roles.includes('admin') ? (
            <Link className="text-decoration-none" to={`/espace/admin/clubs`}><h4 className="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif interclubs<br/><span className="fs-6 fw-lighter text-lowercase fst-italic">accès administrateurs</span></h4></Link>
            ) : null}
          </div>
        </div>
  );
};

export default Menuconnex;