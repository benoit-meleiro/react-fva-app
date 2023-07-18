import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log(token)

    if (!token) {
    
      
      navigate("/login"); 
  }, [navigate]);

  return null;
};

export default RequireAuth;
