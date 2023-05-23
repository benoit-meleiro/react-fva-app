import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"



const Intercrud = () => {

  // //! Message delete
const [isCreneauDeletedMessageVisible, setIsCreneauDeletedMessageVisible] = useState(false);
const [isCreneauDeleted, setIsCreneauDeleted] = useState(false);

const [isCreneauCreatedMessageVisible, setIsCreneauCreatedMessageVisible] = useState(false);


const [creneauxData, setCreneauxData] = useState([]);
      // je récupère la fonction navigate du react router
  const navigate = useNavigate();
// je fais l'appel fetch vers l'url de mon api (qui est en local)
  // et qui renvoie un json contenant la liste des creneaux en BDD
  // quand l'appel est terminé, je stocke les données récupérées
  // dans le state, ce qui force mon composant à se recharger

  useEffect(() => {
    fetch("http://localhost:3002/sessions")
      .then((creneauxDataJson) => {
        return creneauxDataJson.json();
      })
      .then((creneauxDataJs) => {
        setCreneauxData(creneauxDataJs.data);
        
      })

      .finally(() => {
        setIsCreneauDeletedMessageVisible(false); // Réinitialisation de l'état du message
      });

  }, [isCreneauDeleted]);

//* FONCTION POUR LE CREATE
const handleSubmit = (event) => {
  // on empêche la page de recharcher le formulaire
event.preventDefault();
// je récupère les valeurs des champs du formulaire

  const dateSession = event.target.dateSession.value;
  const disponibiliteSession = event.target.disponibiliteSession.value;
  const nomResponsableOuverture = event.target.nomResponsableOuverture.value;
  const prenomResponsableOuverture = event.target.prenomResponsableOuverture.value;
  const matchsInterclubs =  event.target.matchsInterclubs.value;
    
    console.log(dateSession)
// })
  // on fait un appel vers l'API (express)
// on lui spécifie la méthode POST (pour créer)
// et on lui passe en "body" les données du formulaire
// attention, il faut que les données soient au format JSON
// donc on utilise JSON.stringify
// il faut que les donnnées envoyées correspondent
// à ce qui est attendu par l'API
fetch("http://localhost:3002/sessions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(
    
{
  dateSession,
  disponibiliteSession,
  nomResponsableOuverture,
  prenomResponsableOuverture,
  matchsInterclubs,

}


  ),
        })

  // si l'api renvie une reponse 200
  // ça veut dire que tout s'est bien passé
  // alors on affiche un message dans la console
.then((response) => {
  if (response.status === 200) {
    console.log("Le créneau est crée");
      setIsCreneauCreatedMessageVisible(true);    
    setTimeout(() => {setIsCreneauCreatedMessageVisible(true);}, 2000);
    setTimeout(() => {
      setIsCreneauCreatedMessageVisible(false);
      navigate(0);
    }, 2000);
    
    
    // sinon on affiche un message d'erreur
    // car cela veut dire que le coworking n'a pas été créé
  } else {
    console.log("erreur dans la création");
  }
  
});

};


    
 // * FONCTION POUR LE DELETE
 const handleDeleteClick = (creneau) => {
  // const token = localStorage.getItem("jwt");

  // je fais un appel fetch vers l'url de mon api avec la méthode DELETE
  // et je passe l'id du coworking à supprimer en paramètre de l'url
  fetch("http://localhost:3002/sessions/" + creneau.id, {
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
      console.log("La session est bien supprimée");
      setIsCreneauDeletedMessageVisible(true);
      setIsCreneauDeleted(true);
      
      
      setTimeout(() => {
        setIsCreneauDeletedMessageVisible(true);;
      }, 2000);
      
      setTimeout(() => {
        setIsCreneauDeletedMessageVisible(false);
      }, 2000);
      
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
      <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES CRENEAUX</p>
      <div className="separator"></div>
      <form onSubmit={handleSubmit} className="row g-3">

      <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="dateSession">Date</label>
          <input type="date" name="dateSession" min="2023-05-01" max="2024-12-31" required/>
        </div>

      <div className="row col-md-3 mb-3 me-2 justify-content-around">
          <label htmlFor="" className="px-0">Disponibilité</label>
          <div className="col-auto">
            <label className="form-check-label" htmlFor="disponibiliteSession">
              Dispo
              </label>
              <input
              className="form-check-input"
              type="radio"
              name="disponibiliteSession"
              value={true} // Ajout de la valeur true
              checked // Ajout de l'attribut checked pour sélectionner le premier bouton par défaut
               />
          </div> 
          <div className="col-auto">
            <label className="form-check-label" htmlFor="disponibiliteSession">
              Non dispo
            </label>
            <input
            className="form-check-input"
            type="radio"
            name="disponibiliteSession"
            value={false}
            />
          </div> 
        </div>  

        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="prenomResponsableOuverture" className="px-0">Prénom responsable session</label>
          <input type="text" className="form-control" name="prenomResponsableOuverture" />
        </div>

        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="nomResponsableOuverture" className="px-0">Nom responsable session</label>
          <input type="text" className="form-control" name="nomResponsableOuverture" />
        </div>

        


        <div className="row col-md-3 mb-3 me-2 justify-content-around">
          <label htmlFor="" className="px-0">Matchs Inter clubs</label>
          <div className="col-auto">
            <label className="form-check-label" htmlFor="matchsInterclubs">
              Non
              </label>
              <input
              className="form-check-input"
              type="radio"
              name="matchsInterclubs"
              value={false} // Ajout de la valeur true
              checked // Ajout de l'attribut checked pour sélectionner le premier bouton par défaut
               />
          </div> 
          <div className="col-auto">
            <label className="form-check-label" htmlFor="matchsInterclubs">
              oui
            </label>
            <input
            className="form-check-input"
            type="radio"
            name="matchsInterclubs"
            value={true}
            />
          </div> 
        </div> 
        
        <div className="row col-md-3 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Créer le creneau</button>

        </div>
      </form>
      <div className="separator"></div>
      {isCreneauDeletedMessageVisible && (
  <p className="text-success fs-3">Le créneau est supprimé avec succès.</p>)}
        {isCreneauCreatedMessageVisible && (
  <p className="text-success fs-3">Le créneau a été crée avec succès.</p> )}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Date</th>
              <th scope="col">Dispo créneau</th>
              <th scope="col">nom resp</th>
              <th scope="col">prénom resp</th>
              <th scope="col">Interclubs</th>
              <th scope="col">
               <span className="color-fva-rouge">modification</span></th> 
              <th scope="col">
                <span className="color-fva-rouge">suppression</span></th>
              
            </tr>
          </thead>
          <tbody>
          {creneauxData.map((creneau) => {
            const dispo = creneau.disponibiliteSession === true ? "disponible" : "non disponible";
            const interM = creneau.matchsInterclubs === true ? "oui" : "non"
                return (
                    <tr key={creneau.id}>
                            <th  scope="row">{creneau.id}</th>
                            <td>{creneau.dateSession}</td>
                            <td>{dispo}</td>
                            <td>{creneau.nomResponsableOuverture}</td>
                            <td>{creneau.prenomResponsableOuverture}</td>
                            <td>{interM}</td>
                            
                            <td><button className="btn btn-fva-rouge-petit text-white text-decoration-none"><Link className=" text-white text-decoration-none" to={`/espace/admin/sessions/${creneau.id}/update`}>Modifier</Link></button></td>
                            
                            <td>
                              <button onClick={() => handleDeleteClick(creneau)}  className="btn btn-fva-rouge-petit">Supprimer</button>
                            </td>
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

export default Intercrud;