import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                © <span>{currentYear}</span> kmseunh. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
