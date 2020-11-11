import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Icon } from 'semantic-ui-react';
import Header from './Sections/Header';
import { base } from '../styles/layout.css';

const Layout = ({ children, isFirst, pageNo, isLast, moveToLink }) => {
  return (
    <div className={base}>
      <Header is_first={isFirst} page_no={pageNo} move_to_link={moveToLink} />
      {children}
    </div>
  );
};

export default Layout;
