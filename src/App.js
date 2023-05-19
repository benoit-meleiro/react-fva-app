import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/noConnect/Home"
import Club from "./pages/noConnect/Club"
import Adhesions from "./pages/noConnect/Adhesions"
import Contact from "./pages/noConnect/Contact"
import Connexuser from "./pages/noConnect/Connexuser"
import Creneaux from "./pages/connect/Creneaux"
import Dispointerclub from "./pages/connect/Dispointerclub"
import Compointerclub from "./pages/connect/Compointerclub"
import Playercrud from "./pages/connect/Playercrud"
import Creneauxcrud from "./pages/connect/Creneauxcrud"
import Intercrud from "./pages/connect/Intercrud"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<Club />} />
        <Route path="/adhesions" element={<Adhesions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Connexuser />} />

        <Route path="/espace/creneaux" element={<Creneaux/>}/>
        <Route path="/espace/dispointerclub" element={<Dispointerclub/>}/>
        <Route path="/espace/compointerclub" element={<Compointerclub/>}/>
        <Route path="/espace/admin/playercrud" element={<Playercrud/>}/>
        <Route path="/espace/admin/creneauxcrud" element={<Creneauxcrud/>}/>
        <Route path="/espace/admin/intercrud" element={<Intercrud/>}/>
        {/* <Route path="/espace/compointerclub" element={<Compointerclub/>}/> */}


        {/* <Route path="/coworkings" element={<CoworkingsList />} />
        <Route path="/coworkings/:id" element={<CoworkingDetails />} /> */}

        {/* 
          je créé une page (route) avec le formulaire de connexion
         */}
        {/* <Route path="/login" element={<Login />} />

        <Route path="/admin/coworkings" element={<CoworkingsList />} />
        <Route path="/admin/create-coworking" element={<CreateCoworking />} />
        <Route path="/admin/coworkings/:id" element={<CoworkingDetails />} />
        <Route path="/admin/coworkings/:id/update" element={<UpdateCoworking />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
