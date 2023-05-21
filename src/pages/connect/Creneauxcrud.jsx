import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"



const Intercrud = () => {
  return (
    
    <>
    <Header/>
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="text-uppercase text-center my-lg-2">espaces licenciés</h1>
      
        <Deconnexion/>
        <div class="separator"></div>
        <Menuconnex/>
        <div class="separator"></div>
      <p class="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES JOUEURS</p>
      <div class="separator"></div>
      <form class="row g-3">
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="passeJoueur" class="px-0">Equipe</label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Equipe 1</option>
            <option value="2">Equipe 2</option>
          </select>
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="prenomJoueurs" class="px-0">Numéro du match</label>
          <input type="number" class="form-control" id="idmatch" required/>
        </div>
       
        <div class="row col-md-3 mb-3 me-2 justify-content-around">
          <label for="" class="px-0">Réception ou déplacement</label>
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault1">
              Domicile
              </label>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
          </div> 
          <div class="col-auto">
            <label class="form-check-label" for="flexRadioDefault2">
              Déplacement
            </label>
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          </div> 
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="start">Date</label>
          <input type="date" id="start" name="trip-start" value="2023-05-01" min="2023-09-01" max="2024-12-31"/>
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="passeJoueur" class="px-0">Heure</label>
          <input type="time" class="form-control" id="passeJoueur" required/>
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="nomJoueurs" class="px-0">Adversaire</label>
          <input type="text" class="form-control" id="nomJoueurs" required/>
        </div>
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="nomJoueurs" class="px-0">Lieu</label>
          <input type="text" class="form-control" id="nomJoueurs" required/>
        </div>
        
        
        <div class="row col-md-3 mb-3 me-2">
        <button type="submit" class="btn btn-fva-rouge">Créer l'interclub</button>
        </div>
      </form>
      <div class="separator"></div>
      
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Equipe</th>
              <th scope="col">numéro match</th>
              <th scope="col">reception</th>
              <th scope="col">date</th>
              <th scope="col">Adversaire</th>
              <th scope="col">
               <span class="color-fva-rouge">modification</span></th> 
              <th scope="col">
                <span class="color-fva-rouge">suppression</span></th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>equipe 1</td>
              <td>1</td>
              <td>oui</td>
              <td>02/05/2023</td>
              <td>les bauzibads</td>
              <td><button class="btn btn-fva-rouge-petit">Modifier</button></td>
              <td><button class="btn btn-fva-rouge-petit">Supprimer</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Sexe</td>
              <td>Email</td>
              <td>Droits</td>
              <td><button class="btn btn-fva-rouge-petit">Modifier</button></td>
              <td><button class="btn btn-fva-rouge-petit">Supprimer</button></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Sexe</td>
              <td>Email</td>
              <td>Droits</td>
              <td><button class="btn btn-fva-rouge-petit">Modifier</button></td>
              <td><button class="btn btn-fva-rouge-petit">Supprimer</button></td>
            </tr>
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