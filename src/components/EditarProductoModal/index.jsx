import { useState, useEffect } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const EditarProductoModal = ({
  open,
  handleClose,
  producto,
  onUpdate,
}) => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    precio: "",
    stock: "",
    imagen: null,
  });

  useEffect(() => {
    if (producto) {
      setDatosFormulario({
        nombre: producto.nombre,
        precio: producto.precio,
        stock: producto.stock,
        imagen: null,
      });
    }
  }, [producto]);

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
    if (datosFormulario.imagen) {
      data.append("imagen", datosFormulario.imagen);
    }

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/productos/${producto.id}/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      onUpdate(); // <- Se actualiza vista en el componente padre
      handleClose(); // <- Cerramos el modal
      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Producto actualizado con éxito!",
          showConfirmButton: false,
          timer: 1500,
        });
      }, 300);
      console.log(response); // console de prueba, eliminar.
    } catch (error) {
      handleClose(); // <- Cerramos el modal
      setTimeout(() => {
        Swal.fire({
          icon: "error",
          title: "¡Ocurrio un error al actualizar el producto!",
          text: `Tipo: ${error}`,
          showConfirmButton: false,
          footer: "Vuelve a intentarlo mas tarde",
          timer: 5000,
        });
      }, 300);
    }
  };

  return (
    <>
      <div className="body-modal">
        <Modal open={open} onClose={handleClose}>
          <Box sx={style} component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" mb={2}>
              Editar producto
            </Typography>
            <TextField
              fullWidth
              label="Nombre"
              name="nombre"
              value={datosFormulario.nombre}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Precio"
              name="precio"
              value={datosFormulario.precio}
              onChange={handleChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Stock"
              name="stock"
              value={datosFormulario.stock}
              onChange={handleChange}
              margin="normal"
            />
            <input
              type="file"
              onChange={handleChange}
              style={{ marginTop: "16px" }}
              name="imagen"
            />
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button onClick={handleClose} color="secondary" sx={{ mr: 1 }}>
                Cancelar
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Guardar
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};
