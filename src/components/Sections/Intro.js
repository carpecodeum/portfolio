import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import info from '../../configs/personal_info.json';
import intro from '../../configs/intro.json';

import {
  intro_parent,
  main,
  left_box,
  right_box,
  head_box,
  intro_box,
  social_box,
  icons_parent,
  icons_box,
  tooltiptext,
  sub_right_box,
  profile_pic,
  image_box,
} from '../../styles/Intro.css';

export default class Intro extends React.Component {
  render() {
    return (
      <div className={intro_parent}>
        <div className={main}>
          <div className={left_box}>
            <div className={head_box}>{intro.intro}</div>
            <div className={intro_box}>{intro.about_me}</div>
            <div className={social_box}>
              {Object.keys(info.socials).map(key => (
                <div className={icons_parent}>
                  {!isMobile ? <div className={tooltiptext}>{key}</div> : null}
                  <a
                    href={info.socials[key].link}
                    target="_blank"
                    className={icons_box}
                  >
                    <img src={info.socials[key].icon} />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={right_box}>
            <div className={sub_right_box}></div>
            <div className={image_box}>
              <img src={info.profile_pic} className={profile_pic} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
