import React from 'react';
import Sidebar from 'components/Layout/Sidebar';
import Topbar from 'components/Layout/Topbar';

const Layout = ({ sidebarInfo }) => {

  return (
    <div>
      <Topbar sidebarInfo={sidebarInfo}/>
      <Sidebar sidebarInfo={sidebarInfo}/>
    </div>
  );
}

export default Layout;
