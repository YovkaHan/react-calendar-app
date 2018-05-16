/**
 * Created by Jordan3D on 5/7/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doNewEntityObject} from '../../../actions/index'
import PropTypes from 'prop-types'
import './index.scss';

// import Week from '../Week';
// import ControlButtons from '../ControlButtons';
// import Event from '../Event';
// import Month from '../Month';
import CalendarView from '../CalendarView';
import DateSwitcher from '../DateSwitcher';

// const dayHeight = '60px';

function logicCreate (type, id, innerChildren) {
  const result = {};
  const children =  ((object)=>{
    const result = {...object};
    for(let m in result){
      result[m].root = id;
    }
     return result;
  })(innerChildren);
  result[type] = {
    id,
    children
  };
}


class Calendar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    component: PropTypes.string.isRequired,
  }
  constructor(props){
    super(props);
    this.state = {id: null};

    this.init = function (props) {
      const id = props.component;
      const type = "component";
      props.dispatch(doNewEntityObject(id, type));
    }(props)
  }
  componentWillMount() {
    // let promise = {object: null};
    // this.props.dispatch(doCreateObject(promise));
    // promise.object.then((id)=>{
    //   this.setState({id});
    // })
  }
  render() {
    return (
      <div className="c-calendar">

        {/*<Event/>*/}
        <DateSwitcher id="dateSwitcher1" type="dateSwitcher" initDate="2018_06_13" splitter="_"/>
        <CalendarView/>
        {/*<Week/>*/}
        {/*<ControlButtons/>*/}
        {/*<Month/>*/}

      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const {entities} = state;
//   const children = entities[ownProps.type][ownProps.id];
//   return ({
//     children
//   });
// }

export default connect(
 // mapStateToProps
)(Calendar)
