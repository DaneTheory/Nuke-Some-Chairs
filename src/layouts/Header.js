/*===============================================
            WRAPPER FOR MENU CONTAINER
            **Allows easy implementation
            of material UI rendering
            requiriments.
=================================================*/
import baseTheme  from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme  from 'material-ui/styles/getMuiTheme'
import React, { PropTypes, Component } from 'react'
import MenuContainer  from '../containers/MenuContainer'

// Primary Wrapper For Menu Container.
// Global Material UI Configs Set Here For Convenience.
class Header extends Component {
  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  render() {
    return (
      <MenuContainer />
    );
  }
}


Header.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};

export default Header;
