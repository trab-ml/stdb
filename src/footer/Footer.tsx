import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const LINKS = ["mobile app", "community", "STDB LOGO", "company", "need help ?"];

function Footer(): JSX.Element {
  return (
    <footer>
      <nav>
        {LINKS.map((link, index) => (
          <NavLink key={index} to={`/${link}`}>
            {link}
          </NavLink>
        ))}
      </nav>
      <nav>
        <a href='https://facebook.com'>
          <Facebook />
        </a>
        <a href='https://instagram.com'>
          <Instagram />
        </a>
        <a href='https://twitter.com/'>
          <Twitter />
        </a>
        <a href='https://linkedin.com'>
          <LinkedIn />
        </a>
      </nav>
      <p>© 2023 Studentbank. All rights reserved.</p>
    </footer>
  );
}

export default Footer;