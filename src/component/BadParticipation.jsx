// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";



const BadParticipation = ({creneau}) => {


   // ? FONCTION POUR CREER LE JOuEUR DANS LA BASE DE DONNEES
   
   const createPlayerPrez = ({creneau}) => {
   
    
  
  console.log(playerInfo.id)
    
    const playerID =  playerInfo.id
    const jwt = localStorage.getItem("jwt");
  
    fetch(`http://localhost:3002/sessions/${creneau.id}/present`, {
        method: "POST",
        headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwt}` 
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