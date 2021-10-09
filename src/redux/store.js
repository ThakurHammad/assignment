import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import Reducer from "./reducers/index";

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    data: persistReducer(
      {
        key: "form", // key for localStorage key, will be: "persist:form"
        storage,
        debug: true,
        blacklist: ['foo'],
      },
      Reducer
    ),
  });

  const store = createStore(persistReducer({
    key: "root",
    debug: true,
    storage,
  }, reducer), initialState);

  console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // if you want to get restoredState
    console.log("restoredState", store.getState());
  });

  return { store, persistor };
}

export default configureStore;
