/**
 * Created by Jordan3D on 5/7/2018.
 */
import React from 'react';
import './index.scss';
import PropTypes from 'prop-types'

const Item = ({children, cName}) => {
  return (
    <div className={`c-item ${cName? cName: ''}`}>
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.node,
  cName: PropTypes.string
};

export default Item;
