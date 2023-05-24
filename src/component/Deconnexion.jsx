import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const Deconnexion = () => {

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
        
    const deconnexion = () => {
        // Supprimer le JWT du localStorage
        localStorage.removeItem("jwt");
        
        // Redirection vers la page de connexion ou une autre page appropriée
        navigate("/login");
      };


    return (
       <>       
            {playerInfo && (
      <h3 className="text-center">Bienvenue {playerInfo?.firstName} {playerInfo?.lastName} </h3>
    )}
            <div className="pt-1 mb-1 mb-md-0 text-center">
                <button className="btn effectR btn-sm btn-block bg-fva-rouge-f text-white fw-bold" type="button" onClick={deconnexion}>DECONNEXION</button>
            </div>
       </> 
  );
};

export default Deconnexion;