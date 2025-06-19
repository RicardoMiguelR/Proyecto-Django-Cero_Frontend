import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductoCard } from "../../components/ProductoCard";
import { Layout } from "../../Layout";
import { SinProductos } from "../../components/SinProductos";
import axios from "axios";

export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);
  const [urlBase, setUrlBase] = useState(
    "http://127.0.0.1:8000/api/productos/"
  );

  // Llamada a la api con axios async/await ->
  const getData = async (url) => {
    try {
      const { data } = await axios.get(url);
      setProductos(data.results);
      setNext(data.next);
      setPrevious(data.previous);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  useEffect(() => {
    getData(urlBase);
  }, [urlBase]);

  // Logica para paginacion ->
  const nextPage = () => {
    if (next) {
      setUrlBase(next);
    }
  };

  const previousPage = () => {
    if (previous) {
      setUrlBase(previous);
    }
  };

  const actualizarLista = () => {
    getData(urlBase);
  };

  return (
    <>
      <Layout>
        <div className="body-home">
          <h1>Lista de productos</h1>
          <div className="boton-agregar">
            <Link to="/agregar-producto">
              <button type="button" className="btn btn-outline-dark">
                Agregar producto +
              </button>
            </Link>
          </div>
          <div className="row">
            {productos.length === 0 ? (
              <SinProductos />
            ) : (
              productos.map((prod) => (
                <ProductoCard
                  key={prod.id}
                  producto={prod}
                  onUpdate={actualizarLista}
                />
              ))
            )}
          </div>
          <div className="mt-5 flex">
            <button
              onClick={previousPage}
              disabled={!previous}
              className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={nextPage}
              disabled={!next}
              className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};
