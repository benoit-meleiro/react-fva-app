import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";




const Updateplayer = () => {

  
  // je créé un state pour stocker un coworking
  const [player, setPlayer] = useState(null);

  // je récupère l'id présent dans l'url
  const { id } = useParams();

  // j'utilise useEffect, pour executer l'appel à l'api
  // une seule fois, au chargement du composant
  useEffect(() => {
    // je fais un appel fetch, vers l'url de l'api pour récupérer
    //  un coworking en fonction de l'id présent dans l'url
    fetch(`http://localhost:3002/players/${id}`)
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
        // si j'ai une réponse de l'api, je stocke le coworking
        // renvoyé dans le state
        setPlayer(responseJs.data);
      });
  }, [id]);

  // je créé un event listener quand le formulaire est validé
  const handleSubmit = (event) => {
    // j'utilise l'objet event, fourni automatiquement par le navigateur
    // pour empêcher que la page soit rechargée (comportement par défaut)
    event.preventDefault();

    // je récupère les valeurs des champs du formulaire
    // et on les stocke dans des variables
    
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const emailPlayer =  event.target.emailPlayer.value;
    const password =  event.target.password.value;
    const man =  event.target.man.value;
    const joueur_interclubs =  event.target.joueur_interclubs.value;
    const joueur_capitaine =  event.target.joueur_capitaine.value;
    const roles =  event.target.roles.value;
    const jour_ouverture =  event.target.jour_ouverture.value;
    const photos = event.target.photos

    // on fait un appel vers l'API (express)
    // on lui spécifie la méthode POST (pour créer)
    // et on lui passe en "body" les données du formulaire
    // attention, il faut que les données soient au format JSON
    // donc on utilise JSON.stringify
    // il faut que les donnnées envoyées correspondent
    // à ce qui est attendu par l'API
    fetch(`http://localhost:3002/players/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        emailPlayer: emailPlayer,
        password: password,
        man: man,
        joueur_interclubs: joueur_interclubs,
        joueur_capitaine: joueur_capitaine,
        roles: roles,
        jour_ouverture: jour_ouverture,
        photos: photos
        
      }),

      // si l'api renvie une reponse 200
      // ça veut dire que tout s'est bien passé
      // alors on affiche un message dans la console
    }).then((response) => {
      if (response.status === 200) {
        console.log("coworking modifié");
        // sinon on affiche un message d'erreur
        // car cela veut dire que le coworking n'a pas été créé
      } else {
        console.log("erreur");
      }
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
          <label htmlFor="firstName">Prénom du joueur</label>
          <input type="text" name="firstName" defaultValue={player.firstName} />
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="lastName">Prénom du joueur</label>
          <input type="text" name="lastName" defaultValue={player.lastName} />
          </div>
       
          <div className="row col-md-3 mb-3 me-2 justify-content-around">
            <label htmlFor="" className="px-0">Sexe</label>
            <div className="col-auto">
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Masculin
                </label>
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
            </div> 
            <div className="col-auto">
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                féminin
              </label>
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div> 
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="emailJoueur" className="px-0">E-mail</label>
            <input type="email" className="form-control" id="emailJoueur" required/>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="passeJoueur" className="px-0">Mot de passe</label>
            <input type="email" className="form-control" id="passeJoueur" required/>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="passeJoueur" className="px-0">Droits du joueur</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Loisir</option>
              <option value="1">Joueur</option>
              <option value="2">Capitaine</option>
              <option value="3">SuperAdmin</option>
            </select>
          </div>
        
            <div className="row col-md-3 mb-3 me-2 justify-content-around">
              <label htmlFor="" className="px-0">Responsable ouverture</label>
              <div className="col-auto">
                <label className="form-check-label" htmlFor="respOuverture1">
                  Non
                  </label>
                  <input className="form-check-input" type="radio" name="respOuverture" id="respOuverture1"checked/>
              </div> 
              <div className="col-auto">
                <label className="form-check-label" htmlFor="respOuverture2">
                  Oui
                </label>
                <input className="form-check-input" type="radio" name="respOuverture" id="respOuverture2"/>
              </div> 
            </div>
       
            <div className="row col-md-3 mb-3 me-2">
              <label htmlFor="passeJoueur" className="px-0">Jour d'ouverture</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>lundi</option>
                <option value="1">mardi</option>
                <option value="2">Mercredi</option>
                <option value="3">Jeudi</option>
                <option value="3">Vendredi</option>
              </select>
            </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="passeJoueur" className="px-0">Interclubs</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
       
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="passeJoueur" className="px-0">Capitaine</label>
            <select className="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
            <label htmlFor="basic-url" className="form-label">Photo du joueur</label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon3">./assets/img/</span>
              <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
            </div>
          </div>
        
          <div className="row col-md-3 mb-3 me-2">
          <button type="submit" className="btn btn-fva-rouge">Modifier le joueur</button>
          </div>
        </form>
        <div className="separator"></div>
        
        
        </div>
    </main>
    <Footer/>
    </>

  );
};

export default Updateplayer;