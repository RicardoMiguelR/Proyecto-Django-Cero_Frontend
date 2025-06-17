import { useState } from "react";
import { EditarProductoModal } from "../EditarProductoModal";
import "./styles.css";

export const ProductoCard = ({ producto, onUpdate }) => {
  const [openModalEditar, setOpenModalEditar] = useState(false);

  return (
    <>
      <div
        className="card card-styles mb-3 m-auto mt-5 p-2"
        style={{ maxWidth: "540px" }}
      >
        <div className="row">
          <div className="col-md">
            <img
              src={producto.imagen}
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-md">
            <div className="card-body">
              <h5 className="card-title">
                <strong>{producto.nombre}</strong>
              </h5>
              <p className="card-text">
                <strong>Precio: $</strong>
                {producto.precio}
              </p>
              <p className="card-text">
                <small>
                  <strong>Stock: </strong>
                  {producto.stock}
                </small>
              </p>
              <div className="modal-editar">
                <button onClick={() => setOpenModalEditar(true)}>Editar</button>
                <EditarProductoModal
                  open={openModalEditar}
                  handleClose={() => setOpenModalEditar(false)}
                  producto={producto}
                  onUpdate={onUpdate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
