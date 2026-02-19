import React from 'react'
import {NavLink} from 'react-router-dom'

export function Header() {
  return (
    <header className="bg-dark text-white py-4 shadow">
      <div className="container d-flex justify-content-between align-items-center">
        
        <div>
          <h1 className="h2 mb-1">Carrito de Compras</h1>
          <small className="text-light">
            Maquetación en Bootstrap para futura implementación en React
          </small>
        </div>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar productos..."
          />
          <button className="btn btn-primary" type="submit">
            Buscar
          </button>
        </form>

      </div>
    </header>
  );
}
