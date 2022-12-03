import React from 'react';
import PropTypes from 'prop-types';

function Li(props) {
    const {className, onClick: handleClick} = props;

    return (
      <li className={'li' + (className ? ' ' + className : '')} onClick={handleClick}>
          {props.children}
      </li>
  )
}

Li.propTypes = {
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func,
}

export default Li
