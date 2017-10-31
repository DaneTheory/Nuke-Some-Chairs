/*===============================================
                TOP NAV/APP BAR
=================================================*/
import AppBar  from 'material-ui/AppBar'
import Drawer  from 'material-ui/Drawer'
import IconButton  from 'material-ui/IconButton'
import IconMenu  from 'material-ui/IconMenu'
import RaisedButton  from 'material-ui/RaisedButton'
import NavigationClose  from 'material-ui/svg-icons/navigation/close'
import NavigationMenu  from 'material-ui/svg-icons/navigation/menu'
import SocialWhatshot  from 'material-ui/svg-icons/social/whatshot'
import React, { Component } from 'react'
import injectTapEventPlugin  from 'react-tap-event-plugin'
import NumericInputField  from '../input/NumericInputField'
import AvPlaylistAdd  from 'material-ui/svg-icons/av/playlist-add'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
injectTapEventPlugin();


const styles = {
  title: {
    cursor: 'pointer',
  },
  options: {
    display: 'block',
  },
  hide: {
    display: 'none',
  },
  index: {
    zIndex: 9999
  },
  button: {
    top: '6.5em',
    margin: 'auto 0.5em',
    position: 'absolute'
  }
};

// Top Menu Bar And Off-Canvas Menu
class AppBarIconMenu extends Component {

  constructor(props) {
      super(props);
      this.state = {
        value: []
      }
      this.handleToggle = this.handleToggle.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

  	handleToggle(e) {
     e.preventDefault();
     this.props.toggleActive(!this.props.open)
     if(this.props.open === true){
       this.setState({
         value: []
       })
     }
   }

    handleChange(value) {
      let tmpArr = [];
      tmpArr.push(value)
      this.state.value.concat(tmpArr)
      this.setState({
        value: tmpArr
      })
    }

    handleClick(e) {
      e.preventDefault();
      let tmpState = this.state.value;
      let tmpArr = tmpState.map(tmp => {
        return parseInt(tmpState)
      })
      let newVal = parseInt(tmpArr.toString());
      this.props.options.runChairmaggedon([], newVal);
    }

  render() {

    return (
    <div>
      <ReactCSSTransitionGroup
        transitionName={{
          enter: 'onload__appbar',
          enterActive: 'loading__appbar',
          leave: 'onLeave__appbar',
          leaveActive: 'leaving__appbar',
          appear: 'onAppear__appbar',
          appearActive: 'appearing__appbar'
        }}
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={350}
        transitionLeaveTimeout={500}>
      <AppBar
        style={styles.index}
        title={<span style={styles.title}>CHAIRMAGGEDON</span>}
        iconElementLeft={<IconButton><SocialWhatshot /></IconButton>}
        iconElementRight={
          <IconMenu
            className="iconMenu"
            menuStyle={styles.hide}
            iconButtonElement={
              <IconButton>{this.props.open ? <NavigationClose /> : <NavigationMenu />}</IconButton>
            }
            onTouchTap={this.handleToggle}
            touchTapCloseDelay={0}
          />
        }
      />
    </ReactCSSTransitionGroup>
      <Drawer
        docked={false}
        open={this.props.open}
        openSecondary={true}
        onRequestChange={(open: false, reason: 'clickAway') => {
          this.props.toggleActive(!this.props.open)
        }}
      >

      <NumericInputField
        value={this.props.value}
        onChange={this.handleChange}
      />

      <RaisedButton
        className="submitBttn"
        style={styles.button}
        label="Change Chair Amount"
        labelPosition="before"
        primary={true}
        icon={<AvPlaylistAdd />}
        onClick={this.handleClick}
      />

      </Drawer>
    </div>
    );
  }
}

export default AppBarIconMenu;
