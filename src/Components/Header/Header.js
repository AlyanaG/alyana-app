import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <nav className='header'>
            <div>
                <a href="/shop">Shop</a>
                <a href="/accessories">Accessories</a>
                <a href="/login">Login</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;