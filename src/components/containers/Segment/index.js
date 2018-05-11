/**
 * Created by Jordan3D on 5/11/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from '../../presentational/Item'
import {createObject} from '../../../actions'
import './index.scss';
import PropTypes from 'prop-types'

class Segment extends Component {
  static propTypes = {
    intervals: PropTypes.object.isRequired
  }
  constructor(props){
    super(props);
    this.intervals = function (intervals) {
      const arr = new Array(4).fill({});

     return arr.map( (obj, i, arr) => {
        return {
          "bt": intervals.bt + ((intervals.et - intervals.bt + 1) / arr.length ) * i,
          "et": intervals.bt + (((intervals.et - intervals.bt + 1) /arr.length ) * (i+1)) - 1,
        }
      })

    }(props.intervals)
  }

  render() {

    return(
      <div>
        {this.intervals.map( (i, index) => <Item key={index} interval={i} cName='c-quarter'/>)}
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
)(Segment)
