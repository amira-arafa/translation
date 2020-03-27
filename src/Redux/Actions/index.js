import {
  TEST_ACTION_SAGA,
  FETCH_DATA_SAGA,
  FETCH_SINGLE_DATA_SAGA,
  FETCH_SINGLE_DATA,
  POST_DATA_SAGA,
  SET_CURRENT_LANG,
  FETCH_BOOKS
} from "../Types";
// TEST ACTION
export const test = () => {
  console.log("hello from actions");
  // RETURNS ACTION OBJECT
  return {
    type: TEST_ACTION_SAGA
  };
};

// ACTION CREATOR TO GET ALL DATA
export const fetchData = () => {
  return {
    type: FETCH_DATA_SAGA
  };
};

// ACTION CREATOR TO GET Single Data
export const fetchSingleData = id => {
  console.log("id", id);
  return {
    type: FETCH_SINGLE_DATA_SAGA,
    id
  };
};

// ACTION CREATOR TO post Data
export const PostData = () => {
  return {
    type: POST_DATA_SAGA
  };
};

// LANGUAGE ACTION CREATOR
export const setCurrentLang = lang => {
  console.log("hi from action creator");
  localStorage.setItem('lang', lang);
  return { type: SET_CURRENT_LANG, payload: lang };
}