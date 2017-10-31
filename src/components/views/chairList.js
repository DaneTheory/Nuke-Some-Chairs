/*===============================================
                CHAIR LIST COMPONENT
=================================================*/
import ActionEventSeat  from 'material-ui/svg-icons/action/event-seat'
import React  from 'react'
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'

// Pure Stateless Component To Render Out Chairs As List Items.
export default function(props) {
  return (
    <div>
      <div className="list__chairs--main">
        {props.chairs.map(chair => {
          return (
            <div key={chair} className="list__chairs--item">
              <ReactCSSTransitionGroup
                transitionName={{
                  enter: 'onload',
                  enterActive: 'loading',
                  leave: 'onLeave',
                  leaveActive: 'leaving',
                  appear: 'onAppear',
                  appearActive: 'appearing'
                }}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={350}
                transitionLeaveTimeout={500}>
                <div className="list__chairs--context" className="listItem">
                  {chair}
                  <ActionEventSeat />
                </div>
            </ReactCSSTransitionGroup>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
