import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";

const Matchinter = ({club}) => {
  const jwt = localStorage.getItem("jwt");
  const [presentsData, setpresentsData] = useState([]);
  const navigate = useNavigate();
  const [playerInfo, setPlayerInfo] = useState(null);

     const formatDate = (dateString) => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', options);
    };
    useEffect(() => {
      fetch(`http://localhost:3002/clubs/${club.id}/presentinter`,{
        headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${jwt}` 
              },
        body: JSON.stringify(),
                  })
        .then((presentsDataJson) => {
          return presentsDataJson.json();
        })
        .then((presentsDataJs) => {
          setpresentsData(presentsDataJs.data);
          
        });
    }, []);
 
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

//! fonction pour controler si id player = id presents
const presentMessage = presentsData.find((present) => playerInfo && playerInfo.id === present?.id) ? (
  <div className="mx-auto"><p className="d-inline-block  text-success fs-6 text-center px-2 py-2 fw-bold">Pas d'excuse je serais là</p><button onClick={() => removePlayerPrez(club)} className="d-inline-block btn btn-fva-rouge-bad mx-2">J'annule ma venue</button> 
  </div>

) : (
  <div className="mx-auto"><p className="d-inline-block text-danger fs-6 text-center px-2 py-2 fw-bold">Je ne peux pas venir !</p>
  <button onClick={() => createPlayerPrez(club)} className=" d-inline-block btn btn-fva-vert-bad mx-2">Pas d'excuses HOP !</button>
</div>
);

// ? FONCTION POUR CREER LE JOuEUR DANS LA BASE DE DONNEES
   
const createPlayerPrez = () => {
  
  console.log(playerInfo.id)
  const playerId = playerInfo?.id;
  const jwt = localStorage.getItem("jwt");
  
  fetch(`http://localhost:3002/clubs/${club.id}/presentinter`, {
      method: "POST",
      headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
                },
      body: JSON.stringify(
                  {
                    playerId
                  }
  ),  })
    
.then((response) => {
  if (response.status === 201) {
    console.log("Le joueur est dans la base inscription");
    
    setTimeout(() => {
      navigate("/espace/dispointerclub");
      navigate(0)
    }, 1000);
    
  } else {
    console.log("erreur dans la création");
  }
  
}); 

};
//? FIN FONCTION CREATE 
// * FONCTION POUR EFFACER LE JOuEUR DANS LA BASE DE DONNEES
   
const removePlayerPrez = () => {
  
  console.log(playerInfo.id)
  const playerId = playerInfo?.id;
  const jwt = localStorage.getItem("jwt");
  
  fetch(`http://localhost:3002/clubs/${club.id}/presentinter`, {
      method: "DELETE",
      headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${jwt}` 
                },
      body: JSON.stringify(
                  {
                    playerId
                  }
  ),  })
    
.then((response) => {
  if (response.status === 200) {
    console.log("Le joueur est effacé de la base inscription");
    
    setTimeout(() => {
      navigate("/espace/dispointerclub");
      navigate(0)
    }, 2000);
    
  } else {
    console.log("erreur dans la suppression");
  }
  
}); 

};
//* FIN FONCTION EFFACER
    
  const recDep= club.receptionInter == true ? "Domicile" : "Déplacement";
  
      return (
      
        <div key={club.id} className="creneau-de-badInter col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-bleu bg-fva-terrain">
        <p className="text-white text-center mt-2 fw-bold"><span className="bg-fva-bleu-f px-1"><span className="fs-6 fw-light"> Equipe {club.equipe} - </span>MATCH #{club.numeroMatch}<span className="fs-6 fw-light"> - {recDep}</span></span> </p>
        <h2 className="text-white text-center mb-2 text-uppercase">{formatDate(club.dateInter)}</h2>
        <h4 className="text-white fw-normal text-center m-0">{club.adversaireInter}</h4>
        <p className="text-white fw-normal text-center">{club.heureInter}</p>
        <p className="text-white fw-normal text-center">{club.lieuInter}</p>
        <div className="text-center mt-3">
        {presentMessage}
        <div className="separator"></div>
        </div>
        <h3 className="text-white text-center text-uppercase">JOUEURS sélectionnés</h3>
          <div className="separator"></div>    
          <div className=" d-flex flex-row  flex-wrap justify-content-around text-white">
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
                <h5 className="fs-6 fw-lighter">Simple Hommes 1</h5>
                <img src={`/img/${club.joueurSh1}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                {/* <p className=" mb-0 lh-1 fs-6 text-center">{club.joueurSh1}</p> */}
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Simple Hommes 2</h5>
                <img src={`/img/${club.joueurSh2}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                {/* <p className=" mb-0 lh-1 fs-6 text-center">Mouss</p> */}
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Simple Dames</h5>
                <img src={`/img/${club.joueurSd}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                {/* <p className=" mb-0 lh-1 fs-6 text-center">Tara</p> */}
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Double Hommes </h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src={`/img/${club.joueur1Dh}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Jim</p> */}
                  </div>
                  <div><img src={`/img/${club.joueur2Dh}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Sam</p> */}
                  </div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Double Dames </h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src={`/img/${club.joueur1Dd}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Anne</p> */}
                  </div>
                  <div><img src={`/img/${club.joueur2Dd}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Sarah</p> */}
                  </div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Double Mixte 1 </h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src={`/img/${club.joueur1Dm1}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Sam</p> */}
                  </div>
                  <div><img src={`/img/${club.joueur2Dm1}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Lara</p> */}
                  </div>
                 </div>
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-lg-5 py-2 text-center mb-2 bg-fva-bleu-f">
              <h5 className="fs-6 fw-lighter">Double Mixte 2</h5>
                <div className="d-flex flex-row justify-content-around">
                  <div><img src={`/img/${club.joueur1Dm2}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Jean</p>{club.lieuInter} */}
                  </div>
                  <div><img src={`/img/${club.joueur2Dm2}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill "/>
                  {/* <p className=" mb-0 lh-1 fs-6 text-center">Tara</p> */}
                  </div>
                 </div>
              </div>
            </div>
        </div>
  );
};

export default Matchinter;