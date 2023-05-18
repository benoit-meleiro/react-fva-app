import React from "react";
// import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import Deconnexion from "../../component/Deconnexion";
import Menuconnex from "../../component/Menuconnex"



const Creneauxcrud = () => {
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
      <p class="text-center text-uppercase fw-bold ">CRéATION - MODIFICATION - SUPPRESSION DES créneaux de jeu</p>
      <p class="text-center fw-bold color-fvaRouge">Les créneaux de jeu sont générés automatiquement toutes les semaines. Vous pouvez sur cette page bloquer un créneau (vacances scolaires, événements mairie, etc...)</p>

      <div class="separator"></div>
      <form class="row g-3">
        
        <div class="row col-md-3 mb-3 me-2">
          <label for="start">Date début blocage</label>
          <input type="date" id="start" name="trip-start" value="2023-05-01" min="2023-01-01" max="2024-12-31"/>
        </div>
       
        <div class="row col-md-3 mb-3 me-2">
          <label for="start">Date Fin blocage</label>
          <input type="date" id="start" name="trip-start" value="2023-05-01" min="2023-01-01" max="2024-12-31"/>
        </div>
        
        
        <div class="row col-md-3 mb-3 me-2">
        <button type="submit" class="btn btn-fva-rouge">Bloquer le créneau</button>
        </div>
      </form>
      <div class="separator"></div>
      
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">Date début</th>
              <th scope="col">Date Fin</th>
              <th scope="col">
               <span class="color-fva-rouge">Libérer le créneau</span></th> 
              </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>01/05/2023</td>
              <td>01/05/2023</td>
              <td><button class="btn btn-fva-rouge-petit">Libérer</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>08/05/2023</td>
              <td>08/05/2023</td>
              <td><button class="btn btn-fva-rouge-petit">Libérer</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>15/06/2023</td>
              <td>15/06/2023</td>
              <td><button class="btn btn-fva-rouge-petit">Libérer</button></td>
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

export default Creneauxcrud;