import { createStore } from 'redux';
import GreetingReducer from './greetings';

const store = createStore(GreetingReducer);

export default store;
