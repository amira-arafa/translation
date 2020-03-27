import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import  {AllReducers,language}  from "../Reducers/AllReducers";


export default combineReducers({
  anyThing: () => {
    return null;
  },
  AllReducers: AllReducers,
  form: formReducer,
  language:language
});
