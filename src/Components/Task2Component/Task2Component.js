import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../../hooks/useJsonFetch';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import ShowError from '../ShowError/ShowError';

function Task2Component(props) {
    const {url} = props;
    const [data, error, loading] = useJsonFetch(url);


  return (
    <div className='task-2-componet'>
        {(loading || error) && <Modal>{loading && <Loader/>}{error && <ShowError text={error.toString()}/>}</Modal>}
        <h3>{url}</h3>
        <p>{'Данные: ' + data + '\n' + JSON.stringify(data)}</p>
        <p>{'Ошибка: ' + error}</p>
        <p>{'Загрузка: ' + loading}</p>
    </div>
  )
}

Task2Component.propTypes = {
    url: PropTypes.string.isRequired,
}

export default Task2Component
