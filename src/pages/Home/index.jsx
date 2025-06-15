import { useEffect, useState } from "react";
import axios from "axios";
import { ProductoCard } from "../../components/ProductoCard";
import { Layout } from "../../Layout";
import { SinProductos } from "../../components/SinProductos";
const URL_BASE = "http://127.0.0.1:8000/api/productos/";

export const Home = () => {
  const [productos, setProductos] = useState([]);

  // Llamada a la api con axios async/await ->
  const getData = async () => {
    try {
      const { data } = await axios.get(URL_BASE);
      setProductos(data);
    } catch (error) {
      console.error("Error al obtener los datos", error);
    }
  };

  //   // Llamada a la api con fetch nativo async/await ->
  //   const getData = async () => {
  //     const response = await fetch(URL_BASE);
  //     try {
  //         if (!response.ok) {
  //             throw new Error("Error al obtener los datos")
  //         }
  //         const data = await response.json();
  //         setProductos(data)
  //     } catch (error) {
  //         console.error(error)
  //     }
  //   }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Layout>
        <div className="body-home">
          <h1>Lista de productos</h1>
          <div className="row">
            {productos.length === 0 ? (
              <SinProductos />
            ) : (
              productos.map((prod) => (
                <ProductoCard key={prod.id} producto={prod} />
              ))
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};
