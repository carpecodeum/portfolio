import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';

import about_me from '../../configs/personal_info.json';

import {
  about_me_container,
  about_me_right_container,
  about_me_header,
  field_of_interests,
  hobbies,
  link_text,
  link_text_highlight,
  about_me_container_box,
  image_box,
} from '../../styles/About_me.css';

export default class AboutMe extends React.Component {
  render() {
    const interests_length = about_me.fields_of_interests.length;
    const hobbies_length = about_me.hobbies.length;
    const { moveToLink } = this.props;
    return (
      <div className={about_me_container}>
        <div className={about_me_header}>About Me</div>
        <div className={about_me_container_box}>
          <div className={about_me_right_container}>
            Hello World! I am currently a {about_me.year_name} at{' '}
            {about_me.institute} enrolled in {about_me.branch} with interests
            lying in the fields of
            {about_me.fields_of_interests.map((interest, index) => (
              <span className={field_of_interests}>
                {' '}
                {index < interests_length - 2
                  ? interest + ','
                  : index > interests_length - 2
                  ? interest + '.'
                  : interest + ' and '}
              </span>
            ))}{' '}
            {about_me.strengths} Apart from the majority of my time spent in the
            relm of tech, the few other things that bring me happiness are
            {about_me.hobbies.map((hobby, index) => (
              <span className={hobbies}>
                {' '}
                {index < hobbies_length - 2
                  ? hobby + ','
                  : index > hobbies_length - 2
                  ? hobby + '.'
                  : hobby + ' and most importantly'}
              </span>
            ))}
            <br />
            Got something interesting for me ? <br /> Let's{' '}
            <a
              href="https://youtu.be/hE2Ira-Cwxo?t=22"
              target="_blank"
              className={link_text}
            >
              talk
            </a>
            !{' '}
            <a
              href="mailto:adityabhatnagar14@gmail.com"
              target="_blank"
              className={link_text_highlight}
            >
              Mail
            </a>{' '}
            me or connect with me on my other{' '}
            <a
              href="#footer"
              onClick={moveToLink}
              className={link_text_highlight}
            >
              socials
            </a>
            .
          </div>
          <div className={image_box}>
            <img src={about_me.collage} />
          </div>
        </div>
      </div>
    );
  }
}
