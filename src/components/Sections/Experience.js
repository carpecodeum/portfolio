import React from 'react';
import ReactDOM from 'react-dom';

import experience from '../../configs/experience.json';

import {
  experience_main,
  experience_header,
  experience_container,
  experience_box,
  experience_box_left,
  experience_box_right,
  experience_heading,
  experience_subheading,
  experience_description,
  experience_image,
} from '../../styles/Experience.css';

export default class Experiance extends React.Component {
  render() {
    return (
      <div className={experience_main}>
        <div className={experience_header}>My Experiences</div>
        <div className={experience_container}>
          {experience.experiences.map(experience => (
            <div className={experience_box}>
              <div className={experience_box_left}>
                <a href={experience.org_url} target="_blank">
                  <img src={experience.org_icon} className={experience_image} />
                </a>
              </div>
              <div className={experience_box_right}>
                <div className={experience_heading}>{experience.org}</div>
                <div className={experience_subheading}>
                  {experience.position} | {experience.start_date} -{' '}
                  {experience.end_date}
                </div>
                <div className={experience_description}>
                  {experience.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
