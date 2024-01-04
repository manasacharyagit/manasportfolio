import React, { useState } from 'react'
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import Blog from './Blog';
import Sidebar from './Sidebar';

const Layout = () => {
    const [section, setSection] = useState('home')

     const renderSection = () => {
    switch (section) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
    //   case 'contacts':
    //     return <Contacts />;
      case 'blogs':
        return <Blog />;
      default:
        return null;
    }
  };
  return (
    <div>
    <Sidebar setSection={setSection} />
    <div>{renderSection()}</div>
  </div>
  )
}

export default Layout