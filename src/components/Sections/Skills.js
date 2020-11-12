import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import skills from '../../configs/skills.json';

import {
  skills_parent,
  skills_header,
  skills_box,
  skills_container,
  icons_parent,
  tooltiptext,
  skills_images,
  skill_heading,
} from '../../styles/Skills.css';

export default class Skills extends React.Component {
  render() {
    return (
      <div className={skills_parent}>
        <div className={skills_header}>My Skills</div>
        <div className={skills_container}>
          {Object.keys(skills).map(key => (
            <>
              <div className={skill_heading}>{key}</div>
              <div className={skills_box}>
                {skills[key].map(skill => (
                  <div className={icons_parent}>
                    {!isMobile ? (
                      <div className={tooltiptext}>{skill.name}</div>
                    ) : null}
                    <img src={skill.icon} className={skills_images} />
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    );
  }
}
