import React from 'react';
import PropTypes from 'prop-types';


function Modal(props) {
  return (
    <div className='modal'>
        {props.children}
    </div>
  )
}

Modal.propTypes = {
    props: PropTypes.any,
}

export default Modal
