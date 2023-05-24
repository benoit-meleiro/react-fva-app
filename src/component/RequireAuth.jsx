import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log(token)

    if (!token) {
      // Si le token n'existe pas, l'utilisateur n'est pas authentifié
      
      navigate("/login"); // Rediriger vers la page de connexion
    }
  }, [navigate]);

  return null;
};

export default RequireAuth;
