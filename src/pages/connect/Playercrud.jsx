import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"



const Playercrud = () => {return (
    
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
            <label for="nomJoueurs" class="px-0">Nom</label>
            <input type="text" class="form-control" id="nomJoueurs" required/>
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="prenomJoueurs" class="px-0">Prénom</label>
            <input type="text" class="form-control" id="prenomJoueurs" required/>
          </div>
       
          <div class="row col-md-3 mb-3 me-2 justify-content-around">
            <label for="" class="px-0">Sexe</label>
            <div class="col-auto">
              <label class="form-check-label" for="flexRadioDefault1">
                Masculin
                </label>
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked/>
            </div> 
            <div class="col-auto">
              <label class="form-check-label" for="flexRadioDefault2">
                féminin
              </label>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div> 
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="emailJoueur" class="px-0">E-mail</label>
            <input type="email" class="form-control" id="emailJoueur" required/>
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" class="px-0">Mot de passe</label>
            <input type="email" class="form-control" id="passeJoueur" required/>
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" class="px-0">Droits du joueur</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Loisir</option>
              <option value="1">Joueur</option>
              <option value="2">Capitaine</option>
              <option value="3">SuperAdmin</option>
            </select>
          </div>
        
            <div class="row col-md-3 mb-3 me-2 justify-content-around">
              <label for="" class="px-0">Responsable ouverture</label>
              <div class="col-auto">
                <label class="form-check-label" for="respOuverture1">
                  Non
                  </label>
                  <input class="form-check-input" type="radio" name="respOuverture" id="respOuverture1"checked/>
              </div> 
              <div class="col-auto">
                <label class="form-check-label" for="respOuverture2">
                  Oui
                </label>
                <input class="form-check-input" type="radio" name="respOuverture" id="respOuverture2"/>
              </div> 
            </div>
       
            <div class="row col-md-3 mb-3 me-2">
              <label for="passeJoueur" class="px-0">Jour d'ouverture</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>lundi</option>
                <option value="1">mardi</option>
                <option value="2">Mercredi</option>
                <option value="3">Jeudi</option>
                <option value="3">Vendredi</option>
              </select>
            </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" class="px-0">Interclubs</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
       
          <div class="row col-md-3 mb-3 me-2">
            <label for="passeJoueur" class="px-0">Capitaine</label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Non</option>
              <option value="1">Equipe 1</option>
              <option value="2">Equipe 2</option>
            </select>
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
            <label for="basic-url" class="form-label">Photo du joueur</label>
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">./assets/img/</span>
              <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4"/>
            </div>
          </div>
        
          <div class="row col-md-3 mb-3 me-2">
          <button type="submit" class="btn btn-fva-rouge">Créer le joueur</button>
          </div>
        </form>
        <div class="separator"></div>
      
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Sexe</th>
                <th scope="col">email</th>
                <th scope="col">Droits</th>
                <th scope="col">
                <span class="color-fva-rouge">modification</span></th> 
                <th scope="col">
                  <span class="color-fva-rouge">suppression</span></th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Nom</td>
                <td>Prénom</td>
                <td>Sexe</td>
                <td>Email</td>
                <td>Droits</td>
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

export default Playercrud;