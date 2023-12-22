import { useMemo } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers/postReducer";
let store;

function initStore(initialState) {
  const middleWares = [thunkMiddleware];

  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleWares)));
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);


  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
