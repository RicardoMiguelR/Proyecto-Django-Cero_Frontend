import { Routes, Route } from "react-router-dom";
import { Contacto } from "./pages/Contacto";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { AgregarProducto } from "./components/AgregarProducto";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="agregar-producto" element={<AgregarProducto />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
