import React from 'react';
import PropTypes from 'prop-types';
import Task2Component from '../Task2Component/Task2Component';

function UseJsonFetch(props) {
  const urls = [
    'http://localhost:7070/data',
    'http://localhost:7070/error',
    'http://localhost:7070/loading',
  ];

  

  return (
    <div  className = 'use-json-fetch'>
      <Task2Component url={urls[0]}/>
      <Task2Component url={urls[1]}/>
      <Task2Component url={urls[2]}/>
    </div>
  )
}

UseJsonFetch.propTypes = {
    props: PropTypes.any,
}

export default UseJsonFetch
