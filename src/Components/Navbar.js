import React from 'react';
export default function Navbar() {
    return (
        <nav>
            <img src={`${process.env.PUBLIC_URL}/Images/airbnb-logo.png`} alt="Airbnb Logo" />
        </nav>
    );
}