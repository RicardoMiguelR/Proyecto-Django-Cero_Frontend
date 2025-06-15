import "./styles.css";

export const ProductoCard = ({ producto }) => {
  return (
    <>
      <div
        className="card card-styles mb-3 m-auto mt-5 p-2"
        style={{ maxWidth: "540px" }}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={producto.imagen}
              className="img-fluid rounded"
              alt="..."
            />
          </div>
          <div className="col-md-8">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
