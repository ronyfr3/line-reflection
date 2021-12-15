import {
  DATA_LIST_SUCCESS,
  FILTERED_LIST_SUCCESS,
  FILTERED_LIST_FAIL,
  DATA_LIST_FAIL,
} from "../constants/actionType";


//GET_ALL_DATA_FROM_LOCAL_API
export const getData = () => async (dispatch) => {
  try {
    if (localStorage.getItem("apiData") === null) {
      localStorage.setItem("apiData", JSON.stringify([]));
    } else {
      let localdata = JSON.parse(localStorage.getItem("apiData"));

      dispatch({
        type: DATA_LIST_SUCCESS,
        payload: localdata,
      });
    }
  } catch (error) {
    dispatch({
      type: DATA_LIST_FAIL,
      payload: "Something Wrong 500!",
    });
  }
};

//GET_CONFIRMED_DATA
export const confirmData = (data) => async (dispatch, getState) => {
  console.log("data", data);
  try {
    dispatch({
      type: FILTERED_LIST_SUCCESS,
      payload: data,
    });
    localStorage.setItem("returnProduct", JSON.stringify(getState().data));
  } catch (error) {
    dispatch({
      type: FILTERED_LIST_FAIL,
      payload: "No data available!",
    });
  }
};
