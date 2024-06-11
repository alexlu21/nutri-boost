import React, { useState, useEffect } from 'react';
import Search from '../common/Search';
import axios from 'axios';
import Cart from '../common/cart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0); // State for total

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const loadProducts = async () => {
    const result = await axios.get(
      "http://localhost:8088/producto",
      {
        validateStatus: () => {
          return true;
        },
      }
    );
    if (result.status === 302) {
      setProducts(result.data);
    }
  };

  const addToCart = (productId) => {
    const existingProduct = cart.find((product) => product.id === productId);
    if (existingProduct) {
      const updatedCart = [...cart];
      updatedCart[updatedCart.indexOf(existingProduct)].quantity++;
      setCart(updatedCart);
    } else {
      const newProduct = products.find((product) => product.id === productId);
      newProduct.quantity = 1;
      setCart([...cart, newProduct]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.precio * product.quantity;
    });
    setTotal(total);
  };

  return (
    <section style={{ overflowX: 'hidden' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Search
              search={search}
              setSearch={setSearch}
            />
          </div>
        </div>
        <div className="row">
          {products
            .filter((p) =>
              p.nombre.toLowerCase().includes(search)
            )
            .map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card bg-secondary" style={{ height: '100%' }}>
                  <div className="card-body d-flex flex-column">
                    <div style={{ width: 150, height: 150, overflow: 'hidden', margin: '0 auto 10px' }}>
                      <img
                        src={product.productImg}
                        alt="avatar"
                        className="border border-dark img-fluid"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <h5 className="card-title">{product.nombre}</h5>
                    <p className="card-text">Precio: {product.precio}€</p>
                    <p className="card-text" style={{ flex: '1 0 auto' }}>{product.descripcion}</p>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-success"
                        onClick={() => addToCart(product.id)}
                      >
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} total={total} />
    </section>
  );
};

export default ProductList;
