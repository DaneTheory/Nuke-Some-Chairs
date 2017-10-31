/*===============================================
            PRIMARY LAYOUT WRAPPER
            **Used to wrap all layouts
            into one. WIP
=================================================*/
import React, { PropTypes } from 'react'
import Header  from './Header'

// Primary Layout Wrapper For All Layout.
// TODO: Abstract MainContainer as "Main" Layout
//       Like As seen With Header.
const MainLayout = (props) => {
  return (
    <div>
    <header>
      <Header />
    </header>
    <main>

    </main>
  </div>
  );
};

export default MainLayout;
