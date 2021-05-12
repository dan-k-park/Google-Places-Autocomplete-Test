import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  replaceMe: () => "TEST DATA",
  form: formReducer // used for redux form
});
