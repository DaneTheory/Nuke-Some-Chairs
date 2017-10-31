/*===============================================
        BUSINESS LOGIC FOR CHAIR COMPONENT
=================================================*/
import RaisedButton  from 'material-ui/RaisedButton'
import ActionAutorenew  from 'material-ui/svg-icons/action/autorenew'
import ActionEventSeat  from 'material-ui/svg-icons/action/event-seat'
import MapsDirectionsRun  from 'material-ui/svg-icons/maps/directions-run'
import React  from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import ChairList  from './chairList'



const button = {
  zIndex: 999,
  cursor: 'pointer',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0
}

const button2 = {
  zIndex: 999,
  cursor: 'pointer',
  position: 'fixed',
  bottom: 0,
  right: 0
}

// Buttons That Create New Chair UI Based On User Input.
// Submit And Reset Button Created Here.
class RunApp extends React.Component {

  handleClick(e){
    e.preventDefault();
    this.chairMaggeddonLogic();
  }

  chairMaggeddonLogic(){
    let currIndex = 0,
        skip = 0,
        counter = 0;

    const start = start || 1;
    let currArr = this.props.chairs;
    let runApp = this.props.options.runChairmaggedon;

      (function next() {
          if (start > currArr.length) return;
          setTimeout(function() {
            currArr.splice(currIndex, start);
            skip += start;
            currIndex += skip;
            currIndex %= currArr.length;
              next();
          }, 100);
          return runApp(currArr)
      })();
  }

  resetHandler(e){
    e.preventDefault();
    this.props.options.runChairmaggedon([], 100)
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName={{
            enter: 'onload__background',
            enterActive: 'loading__background',
            leave: 'onLeave__background',
            leaveActive: 'leaving__background',
            appear: 'onAppear__background',
            appearActive: 'appearing__background'
          }}
          transitionAppear={true}
          transitionAppearTimeout={50}
          transitionEnterTimeout={350}
          transitionLeaveTimeout={500}>
          <ChairList {...this.props}/>
        </ReactCSSTransitionGroup>

          <ReactCSSTransitionGroup
            transitionName={{
              enter: 'onload__chairList',
              enterActive: 'loading__chairList',
              leave: 'onLeave__chairList',
              leaveActive: 'leaving__chairList',
              appear: 'onAppear__chairList',
              appearActive: 'appearing__chairList'
            }}
            transitionAppear={true}
            transitionAppearTimeout={750}
            transitionEnterTimeout={350}
            transitionLeaveTimeout={500}>
          <RaisedButton
            label="RUN CHAIRMAGGEDON!"
            labelPosition="after"
            primary={true}
            icon={<MapsDirectionsRun />}
            style={button}
            onClick={this.handleClick.bind(this)}
          />
          <RaisedButton
            label="RESET"
            labelPosition="after"
            secondary={true}
            icon={<ActionAutorenew />}
            style={button2}
            onClick={this.resetHandler.bind(this)}
          />
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default RunApp;
