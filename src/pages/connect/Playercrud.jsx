import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";
import RequireAuth from "../../component/RequireAuth";



const Playercrud = () => {

  const [isPlayerDeletedMessageVisible, setIsPlayerDeletedMessageVisible] = useState(false);
  const [isPlayerCreatedMessageVisible, setIsPlayerCreatedMessageVisible] = useState(false);
  const [isPlayerDeleted, setIsPlayerDeleted] = useState(false);
  const [playersData, setPlayersData] = useState([]);

  
  const navigate = useNavigate();

  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    fetch("http://localhost:3002/players", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}` 
    },
    body: JSON.stringify(),})
      .then((playersDataJson) => {
        return playersDataJson.json();
      })
      .then((playersDataJs) => {
        setPlayersData(playersDataJs.data);
        
      })

      .finally(() => {
        setIsPlayerDeletedMessageVisible(false); // Réinitialisation de l'état du message
      });

  }, [isPlayerDeleted]);

//* FONCTION POUR LE CREATE
const handleSubmit = (event) => {
   
  event.preventDefault();
   
  const firstName = event.target.firstName.value;
  const lastName = event.target.lastName.value;
  const sexe = event.target.sexe.value;
  const emailPlayer = event.target.emailPlayer.value;
  const password = event.target.password.value;
  const roles = event.target.roles.value;
  const jour_ouverture = event.target.jour_ouverture.value;
  const joueur_interclubs = event.target.joueur_interclubs.value;
  const joueur_capitaine = event.target.joueur_capitaine.value;
  const photos = event.target.photos.value;

  const defaultValues = {
    sexe: "masculin",
    roles: "loisir",
    jour_ouverture: "non",
    joueur_interclubs: "non",
    joueur_capitaine: "non",
    photos: "pas-de-photos",
  };

      const requestBody = {
          firstName: firstName,
          lastName: lastName,
          sexe: sexe || defaultValues.sexe,
          emailPlayer: emailPlayer,
          password: password,
          roles: roles || defaultValues.roles,
          jour_ouverture: jour_ouverture || defaultValues.jour_ouverture,
          joueur_interclubs: joueur_interclubs || defaultValues.joueur_interclubs,
          joueur_capitaine: joueur_capitaine || defaultValues.joueur_capitaine,
          photos: photos || defaultValues.photos,
        };


  const jwt = localStorage.getItem("jwt");

  fetch("http://localhost:3002/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${jwt}` 
    },
    body: JSON.stringify(),
    body: JSON.stringify(requestBody),
          })

  .then((response) => {
    if (response.status === 200) {
      console.log("Player crée");
        setIsPlayerCreatedMessageVisible(true);    
      setTimeout(() => {setIsPlayerCreatedMessageVisible(true);}, 2000);
      setTimeout(() => {
        setIsPlayerCreatedMessageVisible(false);
        navigate(0);
      }, 2000);
      
    } else {
      console.log("erreur");
    }
    
  });

};

// * FONCTION POUR LE DELETE
  const handleDeleteClick = (player) => {
  
    const jwt = localStorage.getItem("jwt");
    fetch("http://localhost:3002/players/" + player.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}` 
      },
      body: JSON.stringify(),
  
    })
    r
      .then(() => {
        console.log("Player supprimé");
        setIsPlayerDeleted(true);
        setIsPlayerDeletedMessageVisible(true);
        
        setTimeout(() => {
          setIsPlayerDeletedMessageVisible(true);;
        }, 2000);
        
        setTimeout(() => {
          setIsPlayerDeletedMessageVisible(false);
          navigate(0);
        }, 2000);
       
        
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
    
    <Header/>
    <RequireAuth/>
    <main >
    <link rel="stylesheet" href="./style.css" />
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
        <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES JOUEURS</p>
        <div className="separator"></div>
        <form onSubmit={handleSubmit} className="row g-3">
       
          <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="firstName"className="px-0" >Prénom du joueur</label>
          <input type="text" name="firstName" className="form-control" />
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="lastName" className="px-0">Nom du joueur</label>
          <input type="text" name="lastName" className="form-control" />
          </div>

          <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="sexe" className="px-0">Sexe</label>
          <input type="text" name="sexe" className="form-control" placeholder="masculin ou féminin" />
          </div>          
                  
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="emailPlayer" className="px-0">E-mail</label>
            <input type="email" className="form-control" name="emailPlayer" />
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="password" className="px-0">Mot de passe</label>
            <input type="text" className="form-control" name="password" />
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="roles" className="px-0">Droits</label>
            <input type="text" className="form-control" name="roles" placeholder="loisir, équipe, capitaine,admin" />
          </div>

          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="jour_ouverture" className="px-0">Jour ouverture</label>
            <input type="text" className="form-control" name="jour_ouverture" placeholder="non ou jour" />
          </div>
                     
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="joueur_interclubs" className="px-0">Joueur Interclubs</label>
            <input type="text" className="form-control" name="joueur_interclubs" placeholder="non ou equipe_1 ou equipe_2" />
          </div>

          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="joueur_capitaine" className="px-0">Joueur Capitaine</label>
            <input type="text" className="form-control" name="joueur_capitaine" placeholder="non ou equipe_1 ou equipe_2" />
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="photos" className="form-label">Photo du joueur</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">./assets/img/</span>
              <input type="text" className="form-control" name="photos" aria-describedby="basic-addon3 basic-addon4" placeholder="prénom_nom.jpg avec la casse"/>
            </div>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
          <button type="submit" className="btn btn-fva-rouge">Créer le joueur</button>
          </div>
        </form>
        <div className="separator"></div>
        {isPlayerDeletedMessageVisible && (
  <p className="text-success fs-3">Le joueur a été supprimé avec succès.</p>
)}
        {isPlayerCreatedMessageVisible && (
  <p className="text-success fs-3">Le joueur a été crée avec succès.</p>
)}
            
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Equipe</th>
                <th scope="col">email</th>
                <th scope="col">Droits</th>
                <th scope="col">
                <span className="color-fva-rouge">modification</span></th> 
                <th scope="col">
                  <span className="color-fva-rouge">suppression</span></th>
                
              </tr>
            </thead>
            <tbody>
            {playersData.map((player) => {
                return (
                    <tr key={player.id}>
                            <th  scope="row">{player.id}</th>
                            <td>{player.firstName}</td>
                            <td>{player.lastName}</td>
                            <td>{player.joueur_interclubs}</td>
                            <td>{player.jour_ouverture}</td>
                            <td>{player.roles}</td>
                            <td><button className="btn btn-fva-rouge-petit text-white text-decoration-none"><Link className=" text-white text-decoration-none" to={`/espace/admin/players/${player.id}/update`}>Modifier</Link></button></td>
                            
                            <td><button onClick={() => handleDeleteClick(player)}  className="btn btn-fva-rouge-petit">Supprimer</button></td>
                          </tr>
                );
              })}
          </tbody>
          </table>
        </div>
        </div>
    </main>
    <Footer/>
    </>

  );
};

export default Playercrud;