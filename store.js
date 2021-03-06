import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './src/reducers';
import mySaga from './src/sagas';

export default function createStoreWithMiddleware() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();
  // Add all middlewares into an array
  const middleware = [sagaMiddleware];

  // Add the Redux dev tools and middleware code together
  const enhancers = compose(
    applyMiddleware(...middleware)
  );

  // Create a store with the reducers and middleware
  const store = createStore(reducers, enhancers);

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(mySaga);

  return store;
}
