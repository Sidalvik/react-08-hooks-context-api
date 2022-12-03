import React from 'react';
import PropTypes from 'prop-types';

function Ul(props) {
    const {className} = props;
  
  return (
    <ul className={'list' + (className ? ' ' + className : '')}>
        {props.children}
    </ul>
  )
}

Ul.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

export default Ul
