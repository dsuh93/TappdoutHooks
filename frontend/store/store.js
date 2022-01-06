import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'

const configureStore = (preloadedState = {}) => {
  return createStore(preloadedState, rootReducer)
}

export default configureStore;