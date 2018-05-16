/**
 * Created by Jordan3D on 5/8/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doCreateObject} from '../../../actions'
import './index.scss';
import Button from '../Button';
// import Week from '../Week';
// import ControlButtons from '../ControlButtons';
import Event from '../Event';
import Month from '../Month';

class CObject extends Component {
  constructor(props){
    super(props);
    this.state = {id: null};
  }
  componentWillMount() {
    let promise = {object: null};
    this.props.dispatch(doCreateObject(promise));
    promise.object.then((id)=>{
      this.setState({id});
    })
  }
  render() {
    return (
     <Button value={this.state.id}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CObject)
