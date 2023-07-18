import React, { useState } from "react";

const CompteurPoint = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [service, setService] = useState(1);
  const [point, setPoint] = useState(0);
  const scoreboard = document.getElementById("scoreboard");
  const service1 = document.getElementById("service1");
  const service2 = document.getElementById("service2");

  function updateScore() {
    scoreboard.textContent = score1 + "-" + score2;

    if ((score1 >= 21 && score1 - score2 >= 2) || score1 === 30) {
      alert("Le match est terminé : Le joueur 1 gagne !");
    }
    if ((score2 >= 21 && score2 - score1 >= 2) || score2 === 30) {
      alert("Le match est terminé : Le joueur 2 gagne !");
    }
    return;
  }

  const player1Scored = () => {
    setScore1(score1 + 1);
    setService(1);
    setPoint(1);
    updateScore();
  };

  const player2Scored = () => {
    setScore2(score2 + 1);
    setService(2);
    setPoint(2);
    updateScore();
  };

  const resetScore = () => {
    setScore1(0);
    setScore2(0);
    setService(1);
    setPoint(0);
    updateScore();
  };

  return (
    <>
      <div
        id="badminton-court"
        className="d-flex flex-column creneau-de-bad justify-content-center align-items-center my-2 mx-auto col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 bg-fva-vert bg-fva-terrain"
      >
        {/* Éléments pour le score et les joueurs */}
        <div className="row justify-content-around">
          <div
            id="player1"
            className="col-6 text-center display-6 text-white p-3"
          >
            Joueur 1
          </div>
          <div
            id="player2"
            className="col-6 text-center display-6 text-white p-3"
          >
            Joueur 2
          </div>
        </div>
        <div className="separator"></div>
        <div
          id="scoreboard"
          className="display-1 text-white text-center score-text"
        >{`${score1} - ${score2}`}</div>
        <div className="separator"></div>
        <div id="service1" className="fs-1 text-white text-center score-text">
          {service === 1 ? "Service Joueur 1" : ""}
        </div>
        <div id="service2" className="fs-1 text-white text-center score-text">
          {service === 2 ? "Service Joueur 2" : ""}
        </div>
        <div>
          <div className="row justify-content-around">
            <div
              id="player1"
              className="col-12 text-center display-6 text-white p-3"
            ></div>
            <button
              id="player1Button"
              onClick={player1Scored}
              className="col-4 text-center fs-2 border border-2 border-white text-white p-3 bg-fva-vert-f fw-bold text-uppercase"
            >
              Point Joueur 1
            </button>
            <button
              id="player2Button"
              onClick={player2Scored}
              className="col-4 text-center fs-2 border border-2 border-white text-white p-3 bg-fva-vert-f fw-bold text-uppercase"
            >
              Point Joueur 2
            </button>
          </div>
          <div className="separator"></div>
          <div className="justify-content-center mx-auto">
            <button
              id="resetButton"
              onClick={resetScore}
              className="d-block mx-auto col-10 text-center fs-2 border border-2 border-white text-white p-3 bg-fva-rouge-f fw-bold text-uppercase"
            >
              Remettre à zéro
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompteurPoint;
