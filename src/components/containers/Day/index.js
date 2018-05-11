/**
 * Created by Jordan3D on 5/11/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Segment from '../Segment'
import {createObject} from '../../../actions'
import './index.scss';

const segments = new Array(24).fill({});
const intervals = [0, 1439];

const getInterval = (index, length, intervals) => {
  const num = Math.ceil(intervals[1]/length);

  return {
    "bt": num*index,
    "et": (num*(index+1))-1,
  }
}

class Day extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="c-dayf">
        {segments.map( (s,i) => <Segment key={i} intervals={getInterval(i, segments.length, intervals)}/>)}
      </div>
    )
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
  //mapStateToProps
)(Day)
