import { TEST_ACTION_SAGA ,SET_CURRENT_LANG} from "../Types";


export const  AllReducers = (state = {}, action) => {
  switch (action.type) {
    case TEST_ACTION_SAGA:
      console.log("hello from reducer");
      return state;
    default:
      return state;
  }
};
const initialState = {
  lang: localStorage.getItem('lang') || 'en'
};

export const  language=(state = initialState, action)=> {
    switch (action.type) {
        case SET_CURRENT_LANG:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return state;
    }
};
