import React from "react";
import { Link } from "react-router-dom";

const Menuconnex = () => {return (
    <div class="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-vert ">
            <Link class="text-decoration-none" to={`/espace/creneaux`}><h4 class="text-white fw-bold text-center text-uppercase px-2 py-4">S'inscrire à un créneau de jeu </h4></Link>
          </div>
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu">
            <Link class="text-decoration-none" to={`/espace/dispointerclub`}><h4 class="text-white fw-bold text-center text-uppercase py-4">mes disponiblités interclubs</h4></Link>
          </div>
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-bleu-f">
            <Link class="text-decoration-none" to={`/espace/compointerclub`}><h4 class="text-white fw-bold text-center text-uppercase py-4">créer mon équipe (capitaines)</h4></Link>
          </div>
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link class="text-decoration-none" to={`/espace/admin/playercrud`}><h4 class="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif de joueurs</h4></Link>
          </div>
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link class="text-decoration-none" to={`/espace/admin/creneauxcrud`}><h4 class="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif créneaux</h4></Link>
          </div>
          <div class="col-5 col-sm-5 col-md-3 col-lg-3 col-xl-3 bg-fva-gris ">
            <Link class="text-decoration-none" to={`/espace/admin/intercrud`}><h4 class="text-black fw-bold text-center text-uppercase px-2 py-4">création & modif interclubs</h4></Link>
          </div>
        </div>
  );
};

export default Menuconnex;