import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-content">
                <p>Copyright © {new Date().getFullYear()} Mawin.</p>
            </div>
        </div>
    );
}

export default Footer;