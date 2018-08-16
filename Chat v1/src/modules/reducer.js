import socketexample from './socketexamplemodule';

export default combineReducers({
    routing: routerReducer,
    reduxAsyncConnect,
    auth,
    form,
    multireducer: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    pagination,
    widgets,  
  // our hero
    socketexample
  });