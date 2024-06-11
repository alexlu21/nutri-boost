import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

const Registro = () => {
    const navigate = useNavigate()
    const [usuario, setUsuario] = useState({
        nombre: "" ,
        apellidos: "" ,
        nombreUsuario: "" ,
        email: "" ,
        contrasena: "" ,
        telefono: "" ,
        direccion: ""
    });
    const { nombre, apellidos, nombreUsuario, email, contrasena, telefono, direccion } = usuario;

    const handleInputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value })
    }

    const saveUsuario = async(e) => {
        e.preventDefault();
        await axios.post(
            "http://localhost:8088/usuario/add",
            usuario
        )
        navigate("/login")
    }

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-sm-8">
                    <form onSubmit={saveUsuario}>
                        <div className="mb-3">
                            <label className="form-label h4 text-info">Nombre</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nombre"
                                required
                                value={nombre}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Apellidos</label>
                            <input
                                className="form-control"
                                type="text"
                                name="apellidos"
                                required
                                value={apellidos}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Nombre de Usuario</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nombreUsuario"
                                required
                                value={nombreUsuario}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Contraseña</label>
                            <input
                                className="form-control"
                                type="password"
                                name="contrasena"
                                required
                                value={contrasena}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Teléfono</label>
                            <input
                                className="form-control"
                                type="text"
                                name="telefono"
                                required
                                value={telefono}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label h4 text-info">Dirección</label>
                            <input
                                className="form-control"
                                type="text"
                                name="direccion"
                                required
                                value={direccion}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="row mb-5">
                            <div className="col-sm-2">
                                <button
                                type="submit"
                                className="btn btn-outline-success btn-lg"
                                >
                                Registrar
                                </button>
                            </div>

                            <div className="col-sm-2">
                                <Link
                                to={"/login"}
                                className="btn btn-outline-warning btn-lg"
                                >
                                Cancelar
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registro
