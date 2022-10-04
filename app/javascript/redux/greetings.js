const initialState = { name: 'Hello, greetings!' };

export default function GreetingReducer(state = initialState, action) {
  if (action.type === 'SET_GREETING') {
    return action.payload;
  } else {
    return state;
  }
}
