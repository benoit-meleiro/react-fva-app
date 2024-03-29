import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex";
import RequireAuth from "../../component/RequireAuth";



const Updatecreneau = () => {

  const navigate = useNavigate();
  const [isCreneauUpdated, setCreneauUpdated] = useState(false);
  
  const [creneau, setCreneau] = useState(null);


const [disponibiliteSession, setDisponibiliteSession] = useState(creneau?.disponibiliteSession || true);
const [matchsInterclubs, setMatchsInterclubs] = useState(creneau?.matchsInterclubs || true);
  
  const { id } = useParams();

  
  useEffect(() => {
    
    const jwt = localStorage.getItem("jwt");
    fetch(`http://localhost:3002/sessions/${id}`,{
      headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}` 
            },
      body: JSON.stringify(),
                })
      .then((responseJson) => responseJson.json())
      .then((responseJs) => {
       
        setCreneau(responseJs.data);
        setDisponibiliteSession(responseJs.data?.disponibiliteSession === 0 ? false : true);
      });
  }, [id]);

  
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    const dateSession = event.target.dateSession.value;
    const disponibiliteSession = event.target.disponibiliteSession.value;
    const nomResponsableOuverture =  event.target.nomResponsableOuverture.value;
    const prenomResponsableOuverture = event.target.prenomResponsableOuverture.value;
    const matchsInterclubs =  event.target.matchsInterclubs.value;
    
    const jwt = localStorage.getItem("jwt");   
    fetch(`http://localhost:3002/sessions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwt}`, 
      },
      body: JSON.stringify(
     
        {
          dateSession,
          disponibiliteSession,
          nomResponsableOuverture,
          prenomResponsableOuverture,
          matchsInterclubs,     
        
        } )  
              
      
                       
      })
    
    .then((response) => {
      if (response.status === 200) {
        console.log("Creneau modifié");
        setCreneauUpdated(true);
        setTimeout(() => {
          navigate("/espace/admin/sessions");
        }, 2000); 
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
      <RequireAuth/>
        <h1 className="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div className="separator"></div>
        <Menuconnex/>
        <div className="separator"></div>
        <p className="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES creneaux</p>
        <div className="separator"></div>
        <form onSubmit={handleSubmit} className="row g-3">
        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="dateSession">Date</label>
          <input type="date" name="dateSession" min="2023-05-01" max="2024-12-31"  defaultValue={creneau?.dateSession}/>
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
              value={true}
              checked={disponibiliteSession === true}
              onChange={() => setDisponibiliteSession(true)}
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
            checked={disponibiliteSession === false}
            onChange={() => setDisponibiliteSession(false)}
            />
          </div> 
        </div>  
                        
        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="prenomResponsableOuverture" className="px-0">Prénom responsable session</label>
          <input type="text" className="form-control" name="prenomResponsableOuverture" defaultValue={creneau?.prenomResponsableOuverture}/>
        </div>

        <div className="row col-md-3 mb-3 me-2">
          <label htmlFor="nomResponsableOuverture" className="px-0">Nom responsable session</label>
          <input type="text" className="form-control" name="nomResponsableOuverture" defaultValue={creneau?.nomResponsableOuverture}/>
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
              value={false}
              checked={matchsInterclubs === false}
              onChange={() => setMatchsInterclubs(false)}
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
            checked={matchsInterclubs === true}
            onChange={() => setMatchsInterclubs(true)}
            />
          </div> 
        </div>         
        <div className="row col-md-3 mb-3 me-2">
        <button type="submit" className="btn btn-fva-rouge">Modifier le creneau</button>
        </div>
      </form>
        <div className="separator"></div>
        {isCreneauUpdated && (
  <p className="text-success fs-3">Le créneau a été a été modifié avec succès.</p>
)}
        
        
        </div>
    </main>
    <Footer/>
    </>

  );
};

export default Updatecreneau;