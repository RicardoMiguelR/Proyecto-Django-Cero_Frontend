import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ListaProductos } from "./components/ListaProductos";
import { AgregarProducto } from "./components/AgregarProducto";
import { Contacto } from "./pages/Contacto";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="lista-productos" element={<ListaProductos />} />
        <Route path="agregar-producto" element={<AgregarProducto />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
