import React from 'react';
import PropTypes from 'prop-types';
import Ul from '../Ul/Ul';
import Li from '../Ul/Li/Li';

function List(props) {
    const {userList, activeUser, onClick:handleClick} = props;

    const listItems = userList.map((item) => {
      return <Li key={item.id} className={(item.id === activeUser?.id) && 'active'} onClick={() => {handleClick(item.id)}}><p>{item.name}</p></Li>
    });
    
  return (
    <Ul className={'user-list'}>
      {listItems}
    </Ul>
  )
}

List.propTypes = {
  userList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
}

export default List
