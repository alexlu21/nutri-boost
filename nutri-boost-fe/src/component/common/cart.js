import React from 'react';
import '../../styles/cart.css'
const Cart = ({ cart, removeFromCart, total }) => {
  const decimalTotal = total.toFixed(2);

  return (
    <div className="container text-white">
      <h2>Productos seleccionados:</h2>
      <ul className="list-group mb-3">
        {cart.map((product, index) => (
          <li key={index} className="list-group-item border-0 bg-secondary mb-3">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={product.productImg} alt={product.nombre} className="img-fluid rounded cart-img" />
              </div>
              <div className="col-md-6">
                <h3 className="mb-1">{product.nombre}</h3>
                <p className="mb-1">Precio: {product.precio}€</p>
                <p className="mb-0">Descripción: {product.descripcion.slice(0, 50)}...</p>
              </div>
              <div className="col-md-3 d-flex justify-content-end align-items-center">
                <span className="badge bg-secondary rounded-pill me-3">Cantidad: {product.quantity}</span>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(product.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <div className="d-flex justify-content-start">
          <p className="h4">Total: {decimalTotal} €</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
