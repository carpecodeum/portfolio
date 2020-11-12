import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from 'react-device-detect';

import projects from '../../configs/projects.json';

import {
  projects_container,
  project_header,
  projects_box,
  projects_box_mobile,
  project_box_mobile,
  project_box,
  project_text,
  project_text_mobile,
  project_title,
  project_info,
  project_description,
  project_description_mobile,
  project_icons,
  light_icons,
  dark_icons,
  icons_parent,
  icons_box,
  tooltiptext,
  project_images,
  // project_info_mobile,
} from '../../styles/Projects.css';

export default class Projects extends React.Component {
  render() {
    const projects_array = isMobile ? projects.projects : projects.projects;
    return (
      <div className={projects_container}>
        <div className={project_header}>My Projects</div>
        <div className={projects_box}>
          {projects_array.map((project, index) => (
            <div className={project_box}>
              <div className={project_text}>
                <div className={project_title}>{project.name}</div>
                <div className={project_info}>
                  {project.org ? project.org + ' | ' : ''} {project.start_date}{' '}
                  - {project.end_date}
                </div>
                <div className={project_description}>{project.description}</div>
                <div className={project_icons}>
                  <span className={light_icons}>
                    {project.github_url ? (
                      <div className={icons_parent}>
                        <a
                          href={project.github_url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.github_icon.light}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                    {project.org_url ? (
                      <div className={icons_parent}>
                        <a
                          href={project.org_url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.org_icon.light}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                    {project.url ? (
                      <div className={icons_parent}>
                        <a
                          href={project.url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.browser_icon.light}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                  </span>
                  <span className={dark_icons}>
                    {project.github_url ? (
                      <div className={icons_parent}>
                        {!isMobile ? (
                          <div className={tooltiptext}>
                            {project.github_icon.description}
                          </div>
                        ) : null}
                        <a
                          href={project.github_url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.github_icon.dark}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                    {project.org_url ? (
                      <div className={icons_parent}>
                        {!isMobile ? (
                          <div className={tooltiptext}>
                            {project.org_icon.description}
                          </div>
                        ) : null}
                        <a
                          href={project.org_url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.org_icon.dark}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                    {project.url ? (
                      <div className={icons_parent}>
                        {!isMobile ? (
                          <div className={tooltiptext}>
                            {project.browser_icon.description}
                          </div>
                        ) : null}
                        <a
                          href={project.url}
                          target="_blank"
                          className={icons_box}
                        >
                          <img
                            src={project.browser_icon.dark}
                            className={project_images}
                          />
                        </a>
                      </div>
                    ) : null}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
