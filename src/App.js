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
import Updateplayer from "./pages/connect/Updateplayer"
import Creneauxcrud from "./pages/connect/Creneauxcrud"
import Intercrud from "./pages/connect/Intercrud"
import Updateclub from "./pages/connect/Updateclub";
import Updatecreneaux from "./pages/connect/Updatecreneaux";
import CompteurPoint from "./pages/noConnect/CompteurPoint";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/club" element={<Club />} />
        <Route path="/adhesions" element={<Adhesions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Connexuser />} />
        <Route path="/compteur-points" element={<CompteurPoint/>} />

        <Route path="/espace/creneaux" element={<Creneaux/>}/>
        <Route path="/espace/dispointerclub" element={<Dispointerclub/>}/>
        <Route path="/espace/compointerclub" element={<Compointerclub/>}/>

        <Route path="/espace/admin/players" element={<Playercrud/>}/>
        <Route path="/espace/admin/players/:id/update" element={<Updateplayer/>}/>
       

        <Route path="/espace/admin/sessions" element={<Creneauxcrud/>}/>
        <Route path="/espace/admin/sessions/:id/update" element={<Updatecreneaux/>}/>

        <Route path="/espace/admin/clubs" element={<Intercrud/>}/>
        <Route path="/espace/admin/clubs/:id/update" element={<Updateclub/>}/>

        <Route path="/login" element={<Connexuser />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
