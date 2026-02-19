import React from 'react'

export function Content() {
  return (
    <main className="container my-5">
      <div className="row">
        
        {/* LISTADO DE PRODUCTOS */}
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title">Productos</h3>
              <p className="text-muted">Mostrando 6 productos</p>

              <div className="row g-4">

                {/* Producto */}
                <div className="col-md-6">
                  <div className="card h-100 shadow-sm">
                    <img
                      src="https://images.pexels.com/photos/3394666/pexels-photo-3394666.jpeg?auto=compress&cs=tinysrgb&w=600"
                      className="card-img-top"
                      alt="Auriculares Bluetooth"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Auriculares Bluetooth</h5>
                      <p className="fw-bold">COP $159.900</p>
                      <span className="badge bg-success">En stock</span>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                      <button className="btn btn-outline-primary btn-sm">
                        Editar
                      </button>
                      <button className="btn btn-outline-danger btn-sm">
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Puedes duplicar este bloque para más productos */}

              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              Agregar producto
            </div>
            <div className="card-body">
              <form>

                <div className="mb-3">
                  <label className="form-label">Nombre del producto</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Precio (COP)</label>
                    <input type="number" className="form-control" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Stock</label>
                    <input type="number" className="form-control" defaultValue="1" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Categoría</label>
                  <select className="form-select">
                    <option>Selecciona una categoría</option>
                    <option>Audio</option>
                    <option>Computación</option>
                    <option>Accesorios</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">URL de imagen</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea className="form-control" rows="3"></textarea>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">
                    Agregar al catálogo
                  </button>
                  <button type="reset" className="btn btn-outline-secondary">
                    Limpiar
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}

