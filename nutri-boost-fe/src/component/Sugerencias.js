import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sugerencias = () => {
const navigate = useNavigate()
const [sugerencia, setSugerencia] = useState({
    email:"",
    telefono:"",
    motivo:"",
    mensaje:"",
})
const{email,telefono,motivo,mensaje} = sugerencia;

const handleInputChange = (c) =>{
    setSugerencia({...sugerencia, [c.target.name] : c.target.value})
}

const saveSugerencias = async (d) =>{
    d.preventDefault();
    await axios.post(
    "http://localhost:8088/sugerencias/add"
    ,sugerencia)
    navigate("/")
    alert("Sugerencia guardada correctamente!!")
}

return (
<div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100">
    <div className="col-sm-8 py-4 px-5 bg-light rounded shadow">
        <form onSubmit={(s) => saveSugerencias(s)}>
            <div className="mb-4">
                <label htmlFor="email" className="form-label text-info h4">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={email}
                    onChange={(c) => handleInputChange(c)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="telefono" className="form-label text-info h4">Teléfono</label>
                <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    required
                    value={telefono}
                    onChange={(c) => handleInputChange(c)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="motivo" className="form-label text-info h4">Motivo</label>
                <input
                    type="text"
                    className="form-control"
                    id="motivo"
                    name="motivo"
                    required
                    value={motivo}
                    onChange={(c) => handleInputChange(c)}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="mensaje" className="form-label text-info h4">Mensaje</label>
                <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    required
                    placeholder="Explica aquí tu sugerencia!"
                    value={mensaje}
                    onChange={(c) => handleInputChange(c)}
                ></textarea>
            </div>

            <div className="row mb-4">
                <div className="col-sm-6">
                    <button type="submit" className="btn btn-success btn-lg w-100">Guardar</button>
                </div>

                <div className="col-sm-6">
                    <Link to={"/"} className="btn btn-warning btn-lg w-100">Cancelar</Link>
                </div>
            </div>
        </form>
    </div>
</div>
)
}

export default Sugerencias
