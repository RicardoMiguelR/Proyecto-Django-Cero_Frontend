import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout";
import axios from "axios";
import Swal from "sweetalert2";

export const AgregarProducto = () => {
  const navigate = useNavigate();

  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagen") {
      setDatosFormulario({ ...datosFormulario, imagen: files[0] });
    } else {
      setDatosFormulario({ ...datosFormulario, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("nombre", datosFormulario.nombre);
    data.append("precio", datosFormulario.precio);
    data.append("stock", datosFormulario.stock);
    data.append("imagen", datosFormulario.imagen);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/productos/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "¡Producto agregado con éxito!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
      console.log(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      console.error(error);
    }
  };

  return (
    <>
      <Layout>
        <h1>Agregar producto</h1>
        <form onSubmit={handleSubmit} className="body-form mt-5 w-75">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={datosFormulario.nombre}
              onChange={handleChange}
              required
              placeholder="Nombre"
            />
            <label>Nombre</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="precio"
              value={datosFormulario.precio}
              onChange={handleChange}
              required
              placeholder="Precio"
            />
            <label>Precio</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="stock"
              value={datosFormulario.stock}
              onChange={handleChange}
              required
              placeholder="Stock"
            />
            <label>Stock</label>
          </div>
          <div className="form-floating">
            <input
              type="file"
              className="form-control"
              name="imagen"
              required
              onChange={handleChange}
              placeholder="Imagen"
            />
            <label>Cargar imagen</label>
          </div>
          <div className="boton-form mt-3">
            <button type="submit" className="btn btn-dark w-50">
              Agregar
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
};
