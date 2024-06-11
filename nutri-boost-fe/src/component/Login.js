import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        else if (name === 'password') setPassword(value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8088/usuario/login', {
                nombreUsuario: username,
                contrasena: password
            });
            localStorage.setItem('usuario', username);
            navigate("/")
            window.location.reload();
            console.log('Inicio de sesión exitoso:', response.data);
        } catch (err) {
            setError('Nombre de usuario o contraseña incorrectos');
            console.error('Error al iniciar sesión:', err);
        }
    };

    return (
        <div className="container text-light">
            <h2>Iniciar sesión</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="mb-3 text-info h5">
                    <label htmlFor="username" className="form-label">Nombre de usuario:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3 text-info h5">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3 d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                    {''}
                    <button className="btn btn-secondary" onClick={() => navigate("/registro")}>Registro</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
