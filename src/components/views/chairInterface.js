/*===============================================
          INTERFACE FOR CHAIR COMPONENTS
=================================================*/
import Paper  from 'material-ui/Paper'
import React, { PropTypes, Component } from 'react'
import RunApp  from './RunApp'


const style = {
  position: 'absolute',
  height: '85%',
  width: '90%',
  margin: '1em auto',
  left: 0,
  right: 0,
  textAlign: 'center',
  display: 'inline-block',
  overflow: 'scroll'
};

// Basic Main Wrapper For Chair UI
const ChairInterface = (props) => {
  return (
    <div>
      <Paper style={style} zDepth={2} rounded={false}>
          <RunApp {...props} />
      </Paper>
    </div>
  )
}

ChairInterface.propTypes = {
  children: PropTypes.element
};


export default ChairInterface;
