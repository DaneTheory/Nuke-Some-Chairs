/*===============================================
    PRIMARY ENTRY POINT FOR REDUX PROVIDER
    **(Check mainIndex.js for Webpack Entry Point)
=================================================*/
import React, { PropTypes } from 'react'

// Basic Primary Wrapper For Application Components
const App = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
