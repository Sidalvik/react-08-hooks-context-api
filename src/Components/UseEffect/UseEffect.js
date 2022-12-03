import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ShowError from '../ShowError/ShowError';
import Loader from '../Loader/Loader';
import List from './List/List';
import Details from './Details/Details';

function UseEffect(props) {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const [users, setUsers] = useState({userList: [], activeUserInfo: null});

  const initError = (err, timeSec = 7) => {
    console.error(err);
    setError(err.message);
    setTimeout(() => setError(null), timeSec * 1000);
  }

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(process.env.REACT_APP_USERS_URL);
        if (!response.ok) {
          const error = new Error(response.statusText);
          initError(error);
        }
        try {
          const userList = await response.json();
          setUsers({userList: userList, activeUserInfo: null});
        } catch (err) {
          initError(err);
        }

      } catch (err) {
        initError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleSelection = (id) => {
    if (id === users?.activeUserInfo?.id) return;

    setUsers((prev) => {
      return {
        ...prev,
        activeUserInfo: prev.userList.find((item) => item.id === id),
      }
    });
  }


  return (
    <>
      {isLoading && <Modal><Loader/></Modal>}
      {hasError && <Modal><ShowError text={hasError}/></Modal>}
      <List userList={users.userList} activeUser={users.activeUserInfo}  onClick={handleSelection}/>
      {users.activeUserInfo && <Details info={users.activeUserInfo}/>}
    </>
  )
}

UseEffect.propTypes = {
    props: PropTypes.any,
}

export default UseEffect
