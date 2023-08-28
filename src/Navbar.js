import React from 'react';
import './Navbar.css'; 
import CartWidget from './CartWidget';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">Falta <aside>UNO</aside></div>
            <ul className="nav-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget /> {/* Agrega el componente CartWidget aquí */}
        </nav>
    );
}

export default Navbar;