import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../Redux/Reducers/index";
import rootSaga from "../Redux/Sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
