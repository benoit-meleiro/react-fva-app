// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";



const BadParticipation = ({creneau}) => {

// // ! APPEL DE TABLEAU PRESENCE BY ID DU CRENEAU POUR AVOIR TOUS LES PRESENTS    

//     const jwt = localStorage.getItem("jwt");

//     const [presentsData, setpresentsData] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3002/sessions/${creneau.id}/present`,{
//       headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
//             },
//       body: JSON.stringify(),
//                 })
//       .then((presentsDataJson) => {
//         return presentsDataJson.json();
//       })
//       .then((presentsDataJs) => {
//         setpresentsData(presentsDataJs.data);
        
//       });
//   }, []);

// // ! APPEL POUR AVOIR ID DU USER

//     const navigate = useNavigate();
//     const [playerInfo, setPlayerInfo] = useState(null);

//     useEffect (() => {
//       const jwtToken = localStorage.getItem("jwt");
//       const decodedToken = jwt_decode(jwtToken);
//       const userId = decodedToken ? decodedToken.data : null;
//       console.log(jwtToken)
//       console.log(decodedToken)
//       console.log(decodedToken.data)
//       console.log(userId)
      
//       fetch(`http://localhost:3002/players/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${jwtToken}`,
//         },
//         body: JSON.stringify(),})
//         .then((playerInfoDataJson) => {
//           return playerInfoDataJson.json();
//         })
//         .then((playersDataJs) => {
//           setPlayerInfo(playersDataJs.data);
          
//         })
//         .catch((error) => {
//           console.log(error);
//         });
      
//     }, []);

   // ? FONCTION POUR CREER LE JOuEUR DANS LA BASE DE DONNEES
   
   const createPlayerPrez = ({creneau}) => {
    //on empêche la page de recharcher le formulaire
    
  // je récupère les valeurs des champs du formulaire
  console.log(playerInfo.id)
    
    const playerID =  playerInfo.id
    const jwt = localStorage.getItem("jwt");
  
    fetch(`http://localhost:3002/sessions/${creneau.id}/present`, {
        method: "POST",
        headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
                  },
        body: JSON.stringify(
                    {
                      playerID
                    }
    ),  })
      
  .then((response) => {
    if (response.status === 200) {
      console.log("Le joueur est dans la base inscription");
      setTimeout(() => {
       
        navigate(0);
      }, 1000);

    } else {
      console.log("erreur dans la création");
    }
    
  }); 
};
    




    //! fonction pour controler si id player = id presents
    const presentMessage = presentsData.find((present) => playerInfo?.id === present?.id) ? (
        <div className="mx-auto"><p className="d-inline-block  text-success fs-6 text-center px-2 py-2 fw-bold">Pas d'excuse je serais là</p><button className="d-inline-block btn btn-fva-rouge-bad mx-2">J'annule ma venue</button> 
        </div>
    
    ) : (
        <div className="mx-auto"><p className="d-inline-block text-danger fs-6 text-center px-2 py-2 fw-bold">Je ne peux pas venir !</p>
        <button onClick={() => createPlayerPrez(creneau)} className=" d-inline-block btn btn-fva-vert-bad mx-2">Pas d'excuses HOP !</button>
    </div>
    );
    
    return (
        <>
            <div className="d-flex flex-row justify-center text-center px-1 mt-3">
               <div className='text-center m-2'>{presentMessage}</div> 
            </div>
            
            
        </>
    );
    
};

export default BadParticipation;