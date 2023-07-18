
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";


const Creneaubad = ({creneau}) => {
  const jwt = localStorage.getItem("jwt");
  const [presentsData, setpresentsData] = useState([]);
  const navigate = useNavigate();
  const [playerInfo, setPlayerInfo] = useState(null);

useEffect(() => {
  fetch(`http://localhost:3002/sessions/${creneau.id}/present`,{
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
  <div className="mx-auto"><p className="d-inline-block  text-success fs-6 text-center px-2 py-2 fw-bold">Pas d'excuse je serais là</p><button onClick={() => removePlayerPrez(creneau)} className="d-inline-block btn btn-fva-rouge-bad mx-2">J'annule ma venue</button> 
  </div>

) : (
  <div className="mx-auto"><p className="d-inline-block text-danger fs-6 text-center px-2 py-2 fw-bold">Je ne peux pas venir !</p>
  <button onClick={() => createPlayerPrez(creneau)} className=" d-inline-block btn btn-fva-vert-bad mx-2">Pas d'excuses HOP !</button>
</div>
);

// ? FONCTION POUR CREER LE JOuEUR DANS LA BASE DE DONNEES
   
const createPlayerPrez = () => {
  
  console.log(playerInfo.id)
  const playerId = playerInfo?.id;
  const jwt = localStorage.getItem("jwt");
  
  fetch(`http://localhost:3002/sessions/${creneau.id}/present`, {
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
      navigate("/espace/creneaux");
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
  
  fetch(`http://localhost:3002/sessions/${creneau.id}/present`, {
      method: "DELETE",
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
  if (response.status === 200) {
    console.log("Le joueur est effacé de la base inscription");
    
    setTimeout(() => {
      navigate("/espace/creneaux");
      navigate(0)
    }, 2000);
    
  } else {
    console.log("erreur dans la suppression");
  }
  
}); 

};
//* FIN FONCTION EFFACER 
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
  if (creneau.matchsInterclubs === true && dayOfWeek === 'jeu' || creneau.matchsInterclubs === true && dayOfWeek === 'ven'){
    return `3`
}
if (creneau.matchsInterclubs === false && dayOfWeek === 'jeu' || creneau.matchsInterclubs === false && dayOfWeek === 'ven'){
  return `5`
}
}  
  return (
    <div key={creneau.id} className="creneau-de-bad col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-vert bg-fva-terrain">
            {/* <h2 className="text-white text-center">{creneau.jourSession}{creneau.dateSession}</h2> */}
            <h2 className="text-white text-center text-uppercase ">{formatDate(creneau.dateSession)}</h2>
            <div className="d-flex align-items-center justify-content-center">
              <img src={`/img/${creneau.prenomResponsableOuverture}_${creneau.nomResponsableOuverture}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline align-text-top rounded-pill mx-3"/>
              <p className="d-inline text-white"><span className="fw-bold">{creneau.prenomResponsableOuverture}</span> est le responsable de cette session</p>
              
            </div>
            <p className="text-white fw-normal text-center">{GymnaseSession(dayOfWeek)}</p>
            <div className="separator"></div>
            <div className="d-flex flex-row text-white justify-content-evenly align-items-center">
              <p className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-center fs-4 fw-semibold lh-1"><span className="display-6 fw-bold">{terrainDispo(dayOfWeek)}</span> <br/>TERRAINS<br/>DISPONIBLES</p>
              <p className="col-6 col-sm-5 col-md-5 col-lg-5 col-xl-5 text-center fs-4 fw-semibold lh-1"><span className="display-6 fw-bold">{(presentsData.length)+1}</span><br/>JOUEURS<br/>INSCRITS</p>
            </div>
            
            <div className="d-flex flex-row justify-center text-center px-1 mt-3">
               <div className='text-center m-2'>{presentMessage}</div> 
            </div>
            
            <h3 className="text-white text-center">QUI SERA LA ?</h3>
            <div className="row justify-content-center text-white gap-1">
            <div className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
    <img src={`/img/${creneau.prenomResponsableOuverture}_${creneau.nomResponsableOuverture}.jpg`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill" />
    <p className="mb-0 lh-1 fs-6 text-center">{creneau.prenomResponsableOuverture}</p>
  </div>


          {presentsData.map((present) => (
            
  <div key={present.id} className="joueur-dispo-creneaux col-3 col-sm-2 col-md-2 col-lg-2 text-center mb-1">
    <img src={`/img/${present.photos}`} alt="icone de jeune joueuse symbolisant l'âge des adhérents" width="48" height="48" className="d-inline-block align-text-top rounded-pill" />
    <p className="mb-0 lh-1 fs-6 text-center">{present.firstName}</p>
  </div>
))}
 </div>
          </div>
  );
};

export default Creneaubad;