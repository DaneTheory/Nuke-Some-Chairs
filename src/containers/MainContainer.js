/*===============================================
                MAIN CONTENT CONTAINER
=================================================*/
import React  from 'react'
import ChairInterface  from '../components/views/chairInterface'

// Primary Wrapper For Main Content Components.
const MainContainer = (props) => {
  return (
        <ChairInterface {...props} />
  );
};

export default MainContainer;
