import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
} from "../actions";
import data from "../components/data";

const initialState = {
  data: {
    activity: data[0].activity,
    type: "",
    participants: "",
  },
  error: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_DATA_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
