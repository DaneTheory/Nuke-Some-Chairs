/*===============================================
                MENU CONTAINER
              **Smart Component**
=================================================*/
import React  from 'react'
import { connect } from 'react-redux'
import { getChairsSuccess, toggleOpen } from '../actions/menuActions'
import AppBarIconMenu  from '../components/menuBar/menu'
import { store } from '../mainIndex'
import MainContainer  from './MainContainer'

// Primary Wrapper For Menu Content Components.
// TODO: Abstract MainContainer Out Of Here
//       Into Its Own "Smart Component".
const MenuContainer = React.createClass({
  componentWillMount: function() {
    store.dispatch(getChairsSuccess([], 100));
  },

  render: function() {
    return (
      <div>
        <AppBarIconMenu open={this.props.open}
                        value={this.props.value}
                        chairs={this.props.chairs}
                        toggleActive={this.props.toggleActive}
                        options={this.props} />


        <MainContainer chairs={this.props.chairs} options={this.props} />
      </div>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    open: store.menuReducer.open,
    value: store.menuReducer.value,
    chairs: store.menuReducer.chairs,
    options: store.menuReducer
  };
};

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    toggleActive: function(open) {
      dispatch(toggleOpen(open))
    },
    runChairmaggedon: function(newArr, newVal) {
      dispatch(getChairsSuccess(newArr, newVal))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
