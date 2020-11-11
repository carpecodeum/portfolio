import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from 'semantic-ui-react';

import info from '../../configs/personal_info.json';
import pages from '../../configs/components.json';

import {
  fixed,
  moved,
  parent_content_box,
  left_content_box,
  right_content_box,
  pages_box,
  parent_pages_box,
  active_page_box,
  parent_pages_box_dropdown,
  pages_navbar_open,
  pages_navbar,
  navbar_button,
  sidenav,
  pages_box_navbar,
  active_page_box_navbar,
  resume,
  resume_navbar,
} from '../../styles/Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      page_no: 0,
      is_first: true,
      sideNav: false,
    };
  }

  componentDidMount() {
    const { page_no, is_first } = this.props;
    this.setState({
      page_no: page_no,
      is_first: is_first,
    });
  }

  sidenavToggle = e => {
    e.preventDefault();
    const { sideNav } = this.state;
    this.setState({
      sideNav: !sideNav,
    });
  };

  render() {
    const { is_first, page_no, move_to_link } = this.props;
    const { sideNav } = this.state;
    const components = pages.components.slice(0, pages.components.length - 1);
    return (
      <div className={is_first ? fixed : moved}>
        <div className={parent_content_box}>
          <div className={left_content_box}>{info.name}</div>
          <div className={right_content_box}>
            {components.map((comp, index) => (
              <div key={index} className={parent_pages_box}>
                <button
                  className={index === page_no ? active_page_box : pages_box}
                  onClick={() => move_to_link(index + 1)}
                >
                  {comp.nomenclature.verboseName}
                </button>
              </div>
            ))}
            <div className={parent_pages_box}>
              <button className={pages_box}>
                <a href={info.resume} target="_blank" className={resume}>
                  Resume
                </a>
              </button>
            </div>
          </div>
          <div className={sidenav}>
            <button className={navbar_button} onClick={this.sidenavToggle}>
              <Icon name={sideNav ? 'close' : 'sidebar'} />
            </button>
            <div className={sideNav ? pages_navbar_open : pages_navbar}>
              {components.map((comp, index) => (
                <div key={index} className={parent_pages_box_dropdown}>
                  <button
                    className={
                      index === page_no
                        ? active_page_box_navbar
                        : pages_box_navbar
                    }
                    onClick={() => move_to_link(index + 1)}
                  >
                    {comp.nomenclature.verboseName}
                  </button>
                </div>
              ))}
              <div className={parent_pages_box_dropdown}>
                <button className={pages_box_navbar}>
                  <a
                    href={info.resume}
                    target="_blank"
                    className={resume_navbar}
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
