import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem('usuario');
        if (usuarioGuardado) {
            setUsuario(usuarioGuardado);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('usuario');
        setUsuario('');
        window.location.reload();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 p-3 h4">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3" to={"/"}>
                    Nutri Boost
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sobre-nosotros"}>
                                Sobre nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/product-list"}>
                                Comprar Productos
                            </Link>
                        </li>
                        {usuario === "Alexlu21" && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/view-products"}>
                                        Gestión Productos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/add-products"}>
                                        Añadir Productos
                                    </Link>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <Link className="nav-link" to={"/sugerencias"}>
                                Sugerencias
                            </Link>
                        </li>
                        {usuario ? (
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>
                                    Cerrar sesión
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>
                                    Iniciar sesión
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
