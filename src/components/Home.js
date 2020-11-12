import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';
import { isMobile } from 'react-device-detect';

import Layout from './Layout';
import Footer from './Sections/Footer';
import Intro from './Sections/Intro';
import Projects from './Sections/Projects';
import Experiance from './Sections/Experience';
import Skills from './Sections/Skills';
import AboutMe from './Sections/About_me';

import pages from '../configs/components.json';

import { footer } from '../styles/Home.css';

const SEL = 'section';
const AUTO_HEIGHT = 'section fp-auto-height';
const SECTION_SEL = `.${SEL}`;
const AUTO_HEIGHT_SEL = `${AUTO_HEIGHT}`;

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      page_no: 0,
      is_first: true,
      is_last: false,
    };
  }

  onLeave(origin, destination, direction) {
    this.setState({
      page_no: destination.index,
      is_first: destination.isFirst,
      is_last: destination.isLast,
    });
  }

  moveToLink(page_no) {
    fullpage_api.moveTo(page_no);
  }

  moveSectionDown() {
    fullpage_api.moveSectionDown();
  }

  // insert = (arr, index, newItem) => [
  //   ...arr.slice(0, index),
  //   newItem,
  //   ...arr.slice(index),
  // ];

  render() {
    const anchors = [];
    pages.components.map(comp => {
      anchors.push(comp.baseAnchor);
    });

    // const mobile_anchors =
    //   anchors && anchors.length !== 0 && this.insert(anchors, 2, '');
    const { page_no, is_first, is_last } = this.state;

    // Array.prototype.insert = function (index, item) {
    //   this.splice(index, 0, item);
    // };
    return (
      <Layout
        moveToLink={this.moveToLink}
        isFirst={is_first}
        isLast={is_last}
        pageNo={page_no}
      >
        <ReactFullpage
          // debug
          licenseKey={'yoBteQB#n2'}
          anchors={[...anchors]}
          sectionSelector={SECTION_SEL}
          onLeave={this.onLeave.bind(this)}
          render={({ fullpageApi, state }) => {
            return (
              <ReactFullpage.Wrapper>
                <div className={SEL}>
                  <Intro />
                </div>
                <div className={SEL}>
                  <Projects />
                </div>
                {/* {isMobile ? (
                  <div className={SEL}>
                    <Projects extra={true} />
                  </div>
                ) : null} */}
                <div className={SEL}>
                  <Experiance />
                </div>
                <div className={SEL}>
                  <Skills />
                </div>
                <div className={SEL}>
                  <AboutMe moveToLink={this.moveSectionDown} />
                </div>
                <div className={AUTO_HEIGHT_SEL}>
                  <div className={footer}>
                    <Footer />
                  </div>
                </div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </Layout>
    );
  }
}
