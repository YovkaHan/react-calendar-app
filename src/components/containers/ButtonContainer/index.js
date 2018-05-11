/**
 * Created by Jordan3D on 5/9/2018.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '../../presentational/Button';
import {entityChange} from '../../../actions';
import PropTypes from 'prop-types'

class ButtonContainer extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
 }
  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    const newValue = this.props.value === 'on' ? 'off' : 'on';
    this.props.dispatch(
      entityChange(
        this.props.type,
        this.props.id,
        {
          value: newValue
        }))
  }

  render () {
    return (
      <Button onClick={this.onClick}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {entities} = state;
  const button = entities[ownProps.type][ownProps.id][0];
  const value = entities[button.type][button.id].value;
  return ({
    value,
    type: button.type,
    id: button.id
  });
}

export default connect(
  mapStateToProps
)(ButtonContainer)
