import React from 'react';
import { footerDiv } from '../styles/footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterestP, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => (
    <div className={footerDiv}>
        <div id="left">
            <ul>
                <li>Search</li>
                <li>Home</li>
                <li>Shop</li>
                <li>Enlightenment</li>
            </ul>
        </div>
        <div id="middle">
            <ul>
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div id="social">
            <ul>
                <li><FontAwesomeIcon icon={faFacebookF} />{` `}Facebook</li>
                <li><FontAwesomeIcon icon={faTwitter} />{` `}Twitter</li>
                <li><FontAwesomeIcon icon={faPinterestP} />{` `}Pinterest</li>
                <li><FontAwesomeIcon icon={faInstagram} />{` `}Instagram</li>
            </ul>
        </div>
        <div id="copyright">
            © {new Date().getFullYear()}, Perfect Blue Alchemy
                    <br />
                    Powered By
                    {` `}
            <a href="https://www.shopify.com/">Shopify</a>
        </div>
    </div>
)