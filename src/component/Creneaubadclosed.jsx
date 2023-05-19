import React from "react";
// import { Link } from "react-router-dom";


const Creneaubadclosed = ({creneau}) => {
  
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', options);
  };


  return (
    <div className="creneau-de-bad-closed col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 bg-fva-rouge-f bg-fva-terrain">
          <h2 className="text-white text-center text-uppercase">{formatDate(creneau.dateSession)}</h2>
          <h3 className="text-white text-center text-uppercase p-5">tu peux aller a ton
            cours d’aqua poney,
             il n’y a pas bad pour
            cette session</h3>
          <div className="separator"></div>
        </div>
  );
};

export default Creneaubadclosed;