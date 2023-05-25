// import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

// const [participation, setParticipation] = useState([]);

const BadParticipation = ({creneau}) => {

// ! APPEL DE TABLEAU PR2SENCE BY ID DU CRENEAU POUR AVOIR TOUS LES PRESENTS    

    const jwt = localStorage.getItem("jwt");

    const [presentsData, setpresentsData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/sessions/${creneau.id}/present`,{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}` // Ajouter le JWT au header "Authorization"
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

    const navigate = useNavigate();
    const [playerInfo, setPlayerInfo] = useState(null);

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
    const presentMessage = presentsData.find((present) => playerInfo?.id === present?.id) ? (
        <p className="d-inline-block bg-white color color-fvaVert fs-6 text-center">pas d'excuse je serais là</p>
    ) : (
        <p className="d-inline-block bg-white color color-fvaRouge fs-6 text-center">Promis je viens à la prochaine !</p>
    );
    
    return (
        <>
            <div className="d-flex flex-row justify-center text-center mt-3">
                <div className="mx-auto">
                    <button className="btn btn-fva-rouge-bad mx-2">J'ai AquaPoney</button>
                </div>
                <div className="mx-auto">
                    <button className="btn btn-fva-vert-bad mx-2">OK Je viens</button>
                </div>
            </div>
            <div className='text-center m-2'>{presentMessage}</div>
            
        </>
    );
    
};

export default BadParticipation;