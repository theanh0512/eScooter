import { applyMiddleware, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import { autoRehydrate, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { checkStoreCompatibility } from 'app/store/compatibility';
import reducers from 'app/reducers';

// TODO: handle persistence and clearing of location breadcrumbs
const config = {
  storage: AsyncStorage
  //whitelist: ['auth', 'settings']
};
let store;
const defaultState = {};

export async function configureStore(onComplete) {
  // Check store compatibility
  const wasStoreReset = await checkStoreCompatibility();
  store = createStore(
    reducers,
    defaultState,
    composeWithDevTools(
      applyMiddleware(...[thunk]),
      autoRehydrate()
    )
  );

  persistStore(store, config, () => onComplete(wasStoreReset));
  return store;
}

export const dispatch = action => {
  if (store) {
    store.dispatch(action);
  }
};
