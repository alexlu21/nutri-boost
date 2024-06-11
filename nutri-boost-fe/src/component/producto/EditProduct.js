import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    var navigate = useNavigate();

    const{id} = useParams();

    const[product, setProduct] = useState({
        nombre :"",
        precio :"",
        descripcion :"",
        productImg :"",
    })
    const{nombre,precio,descripcion,productImg} = product;

    const handleInputChange = (c) =>{
      setProduct({...product, [c.target.name] : c.target.value})
    }

    useEffect(()=>{
        loadProducts();
    }, []);

    const loadProducts = async () =>{
        const res = await axios.get(`http://localhost:8088/producto/producto/${id}`)
        setProduct(res.data)
    }

    const updateProducts = async (d) =>{
        d.preventDefault()
        await axios.put(`http://localhost:8088/producto/update/${id}`,product)
        navigate("/view-products")
    }
  return (
    <div className="col-sm-8 py-2 px-5">
      <form onSubmit={ (s) =>updateProducts(s)}>
          <div className="input-group mb-5">
                <label 
                className="input-group text h4 text-info"
                htmlFor="nombre">
                Nombre
                </label>
                <input
                className="form-control col-sm-6"
                type="text"
                name="nombre"
                id="nombre"
                required
                value={nombre}
                onChange={(c) => handleInputChange(c)}
                />
          </div>

          <div className="input-group mb-5">
                <label 
                className="input-group text h4 text-info"
                htmlFor="precio">
                Precio
                </label>
                <input
                className="form-control col-sm-6"
                type="text"
                name="precio"
                id="precio"
                required
                value={precio}
                onChange={(c) => handleInputChange(c)}
                />
          </div>

          <div className="input-group mb-5">
                <label 
                className="input-group text h4 text-info"
                htmlFor="descripcion">
                Descripcion
                </label>
                <input
                className="form-control col-sm-6"
                type="text"
                name="descripcion"
                id="descripcion"
                required
                value={descripcion}
                onChange={(c) => handleInputChange(c)}
                />
          </div>

          <div className="input-group mb-5">
                <label 
                className="input-group text h4 text-info"
                htmlFor="productImg">
                Cambiar Imagen
                </label>
                <input
                className="form-control col-sm-6"
                type="text"
                name="productImg"
                id="productImg"
                required
                value={productImg}
                onChange={(c) => handleInputChange(c)}
                />
          </div>

          <div className="row mb-5">
              <div div className="col-sm-2">
                <button
                type="submit"
                className="btn btn-outline-success btn-lg">
                Guardar
                </button>
              </div>

              <div className="col-sm-2">
                <Link
                to={"/view-products"}
                type="submit"
                className="btn btn-outline-warning btn-lg"
                >
                Cancelar
                </Link>
              </div>
          </div>
      </form>
    </div>
  )
}

export default EditProduct
