// import axios from "axios";

// const url = `${process.env.REACT_APP_API_URL}`;

export const createNewChat = (data) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_NEW_CHAT_CONTACT",
      payload: data,
    });
  };
};

export const showDetailRecentChat = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_DETAIL_RECENT_CHAT",
      payload: data,
    });
  };
};
