import React from 'react';
import PropTypes from 'prop-types';

function UserAvatar(props) {
  const {src, alt} = props;

  return (
    <>
      <img src={src} alt={alt} className='avatar'/>
    </>
  )
}

UserAvatar.defaultProps = {
  // src: process.env.REACT_APP_DEFAULT_AVATAR_URL,
  src: '/img/default-user.png',
  alt: 'Аватар',
};

UserAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default UserAvatar
