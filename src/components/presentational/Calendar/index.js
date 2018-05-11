/**
 * Created by Jordan3D on 5/7/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createObject} from '../../../actions'
import './index.scss';
// import Week from '../Week';
// import ControlButtons from '../ControlButtons';
// import Event from '../Event';
// import Month from '../Month';
import CalendarView from '../../containers/CalendarView';

const dayHeight = '60px';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {id: null};
  }
  componentWillMount() {
    // let promise = {object: null};
    // this.props.dispatch(createObject(promise));
    // promise.object.then((id)=>{
    //   this.setState({id});
    // })
  }
  render() {
    return (
      <div className="c-calendar">

        {/*<Event/>*/}
        <div className="c-panel" style={{height: dayHeight}}>
          <div className="arrow arrow-left"></div>
          <div className="viewTitle">{this.state.id}</div>
          <div className="arrow arrow-right"></div>
        </div>
        <CalendarView/>
        {/*<Week/>*/}
        {/*<ControlButtons/>*/}
        {/*<Month/>*/}

      </div>
    );
  }
}

export default connect()(Calendar)
