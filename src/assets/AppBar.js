/*===============================================
          TEST APPBAR STYLES AND BUILD
=================================================*/
import AppBar  from 'material-ui/AppBar'
import IconButton  from 'material-ui/IconButton'
import IconMenu  from 'material-ui/IconMenu'
import MenuItem  from 'material-ui/MenuItem'
import NavigationExpandMore  from 'material-ui/svg-icons/navigation/expand-more'
import NavigationMenu  from 'material-ui/svg-icons/navigation/menu'
import SocialWhatshot  from 'material-ui/svg-icons/social/whatshot'
import EditorPublish  from 'material-ui/svg-icons/editor/publish'
import React, { Component } from 'react'
import NumericInput  from 'react-numeric-input'
import RaisedButton from 'material-ui/RaisedButton'
import injectTapEventPlugin  from 'react-tap-event-plugin'
injectTapEventPlugin();

const styles = {
  title: {
    cursor: 'pointer',
  },
  options: {
    display: 'block',
  }
};


class AppBarIconMenu extends Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false,
        value: 100
      }
      this.handleToggle = this.handleToggle.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

  	handleToggle(e) {
     e.preventDefault();
  	 this.setState({
       open: !this.state.open
     })
  	}

    handleChange(valueAsNumber) {
      this.setState({value: valueAsNumber});
    }

    handleClick(e) {
     e.preventDefault();
     console.log(this.state.value)
    }

  render() {

    console.log(this.state);
    return (
      <AppBar
        title={<span style={styles.title}>CHAIRMAGGEDON</span>}
        iconElementLeft={<IconButton><SocialWhatshot /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton>{this.state.open ? <NavigationExpandMore /> : <NavigationMenu />}</IconButton>
            }
            open={this.state.open}
            onRequestChange={(open: false, reason: 'clickAway') => {
              this.setState({
                open: !this.state.open
              })}}
            onTouchTap={this.handleToggle}
            touchTapCloseDelay={0}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          >
            <NumericInput
              style={styles.options}
              value={this.state.value}
              requestChange={this.handleChange}
              onChange={this.handleChange}
              autoComplete="on"
              autoCorrect="on"
              autoFocus={false}
              form="chairForm"
              placeholder="Enter Chair Amount"
              spellcheck="false"
            	name="numberOfChairs"
            	className="input__chair"
            	min={ 0 }
            	precision={ 0 }
            	pattern="[-+]?[0-9]+"
            />

            <RaisedButton
              style={styles.options}
              label="Update Chair Count"
              fullWidth={true}
              labelPosition="after"
              primary={true}
              icon={<EditorPublish />}
            />

          </IconMenu>
        }
      />
    );
  }
}

export default AppBarIconMenu;
