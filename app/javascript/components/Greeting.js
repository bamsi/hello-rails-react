import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Greeting = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const getRandomGreeting = async () => {
    const URL = 'http://127.0.0.1:3000/greetings';
    const response = await fetch(URL);
    let data = await response.json();
    dispatch({ type: 'SET_GREETING', payload: data });
  };
  getRandomGreeting();
  return <h2>{name}</h2>;
};

export default Greeting;
