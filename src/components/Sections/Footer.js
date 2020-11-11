import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Utils/Draggable_logo';

import contact from '../../configs/personal_info.json';

import {
  footer,
  footer_left,
  footer_right,
  social_links,
  link_box,
  contact_box,
  a_box,
  caption_box,
} from '../../styles/Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={footer}>
        <div className={footer_left}>
          <Logo />
          <div className={caption_box}>
            <div>Like my Storm-Trooper theme website? Star it!</div>
            <div>Aditya Bhatnagar © 2020</div>
            <div>P.S. Did you find any of the easter-eggs? :P</div>
          </div>
        </div>
        <div className={footer_right}>
          <div className={contact_box}>Contact Me -</div>
          <div className={social_links}>
            {Object.keys(contact.socials).map(link => (
              <div className={link_box}>
                <a
                  href={contact.socials[link].link}
                  target="_blank"
                  className={a_box}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
