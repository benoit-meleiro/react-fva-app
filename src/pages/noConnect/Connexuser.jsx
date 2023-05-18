import React from "react";
import { Link } from "react-router-dom";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";


const Connexuser = () => {return (
    
    <>
    <Header/>
    <main class="flex-shrink-0">
      <div class="container">
        <h1 class="text-uppercase text-center my-lg-2">connexion licencies fva</h1>
        <section class="vh-50 ">
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col col-xl-10">
                <div class="card rounded-3 border-white" >
                  <div class="row g-0">
                    <div class="col-md-6 col-lg-5 d-none d-md-block">
                      <img src="/img/phtos-connexion-joueurs.jpg" alt="login form" class="img-fluid rounded-start-3" />
                      
                    </div>
                    <div class="col-md-6 col-lg-7 d-flex align-items-center bg-fva-bleu rounded-end-3">
                      <div class="card-body p-2 p-lg-2 text-black">
        
                        <form>        
                          <div class="d-flex flex-column justify-content-center align-items-center mb-3 pb-3 mb-md-1 pb-md-1">
                            <img src="/img/logo-fva-complet.svg"
                              alt="login form" class="img-fluid rounded-3"  width="100" height="100"/>
                              <p class="text-white px-3 px-md-1 lh-sm">Cet espace est réservé aux licenciés et membres actifs de l’association sportive de la ville d’aussonne. Si vous souhaitez nous rejoindre en tant que menbre actif de l’association, merci de nous contacter à l’aide du formulaire du site</p>
                          </div>
                          <div class="form-outline mb-2 mb-md-1">
                            <input type="email" id="form2Example17" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example17">Votre adresse mail</label>
                          </div>
        
                          <div class="form-outline mb-2 mb-md-1">
                            <input type="password" id="form2Example27" class="form-control form-control-lg" />
                            <label class="form-label" for="form2Example27">Votre mot de passe</label>
                          </div>
        
                          <div class="pt-1 mb-1 mb-md-0">
                            <button class="btn  btn-sm btn-block bg-fva-vert-f text-white fw-bold" type="button">CONNEXION</button>
                          </div>
        
                          <a class="small text-muted d-md-none" href="contact.html">Si vous avez oublié votre mot de passe, merci de nous envoyer un message</a>
                          
                        </form>
        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            
        </div>
    </main>
    <Footer/>
    
    
    </>




  );
};

export default Connexuser;