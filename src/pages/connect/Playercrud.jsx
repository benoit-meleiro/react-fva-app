import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";




const Playercrud = () => {

  
  const [playersData, setPlayersData] = useState([]);

  // je récupère la fonction navigate du react router
  const navigate = useNavigate();

  // je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des players en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3002/players")
      .then((playersDataJson) => {
        return playersDataJson.json();
      })
      .then((playersDataJs) => {
        setPlayersData(playersDataJs.data);
        
      });
  }, []);

  const handleDeleteClick = (player) => {
    // const token = localStorage.getItem("jwt");

    // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
    // et je passe l'id du coworking à supprimer en paramètre de l'url
    fetch("http://localhost:3002/players/" + player.id, {
      method: "DELETE",
      // si l'url de mon api nécessite une authentification
      // je lui passe le JWT stocké en localStorage dans le header
      // de la requête
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    })
      // quand le fetch est terminé, je recharge la page actuelle grâce
      // à la fonction navigate du react router
      .then(() => {
        navigate(0);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
    <Header/>
    <main className="flex-shrink-0">
      <div className="container">
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
        <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES JOUEURS</p>
        <div className="separator"></div>
        <form className="row g-3">
       
          <div className="row col-md-3 mb-3 me-2">
            <label for="nomJoueurs" className="px-0">Nom</label>
            <input type="text" className="form-control" id="nomJoueurs" required/>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="prenomJoueurs" className="px-0">Prénom</label>
            <input type="text" className="form-control" id="prenomJoueurs" required/>
          </div>
       
          <div className="row col-md-3 mb-3 me-2 justify-content-around">
            <label for="" className="px-0">Sexe</label>
            <div className="col-auto">
              <label className="form-check-label" for="flexRadioDefault1">
                Masculin
                </label>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
            </div> 
            <div className="col-auto">
              <label className="form-check-label" for="flexRadioDefault2">
                féminin
              </label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div> 
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="emailJoueur" className="px-0">E-mail</label>
            <input type="email" className="form-control" id="emailJoueur" required/>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" className="px-0">Mot de passe</label>
            <input type="email" className="form-control" id="passeJoueur" required/>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" className="px-0">Droits du joueur</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loisir</option>
              <option value="1">Joueur</option>
              <option value="2">Capitaine</option>
              <option value="3">SuperAdmin</option>
            </select>
          </div>
        
            <div className="row col-md-3 mb-3 me-2 justify-content-around">
              <label for="" className="px-0">Responsable ouverture</label>
              <div className="col-auto">
                <label className="form-check-label" for="respOuverture1">
                  Non
                  </label>
                  <input className="form-check-input" type="radio" name="respOuverture" id="respOuverture1"checked/>
              </div> 
              <div className="col-auto">
                <label className="form-check-label" for="respOuverture2">
                  Oui
                </label>
                <input className="form-check-input" type="radio" name="respOuverture" id="respOuverture2"/>
              </div> 
            </div>
       
            <div className="row col-md-3 mb-3 me-2">
              <label for="passeJoueur" className="px-0">Jour d'ouverture</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>lundi</option>
                <option value="1">mardi</option>
                <option value="2">Mercredi</option>
                <option value="3">Jeudi</option>
                <option value="3">Vendredi</option>
              </select>
            </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" className="px-0">Interclubs</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
       
          <div className="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" className="px-0">Capitaine</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label for="basic-url" className="form-label">Photo du joueur</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">./assets/img/</span>
              <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
            </div>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
          <button type="submit" className="btn btn-fva-rouge">Créer le joueur</button>
          </div>
        </form>
        <div className="separator"></div>
            
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Sexe</th>
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