import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;
// const url = `${process.env.URL_HOSTING_APP}`;

export const getDataUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/users/searchuser`, {
        params: {
          username: data,
        },
      });
      dispatch({
        type: "GET_DATA_USER",
        payload: response.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const AddContacts = (data) => {
  const token = localStorage.getItem("token");
  // const tokenObj = JSON.parse(tokenString);
  console.log(token);

  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/contacts/addcontact`,
        {
          userContactId: data,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      dispatch({
        type: "ADD_DATA_CONTACT",
        payload: response.data,
      });
      dispatch({
        type: "HIDE_ADDCONTACT_FORM",
      });
      console.log(response.data);
    } catch (error) {
      window.alert("Can't add a same user");
    }
  };
};

export const getDataContact = () => {
  const token = localStorage.getItem("token");

  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/contacts/get`, {
        headers: {
          "x-access-token": token,
        },
      });
      dispatch({
        type: "GET_DATA_CONTACT",
        payload: response.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const deleteContacts = (data) => {
  const token = localStorage.getItem("token");
  console.log(token);

  return async (dispatch) => {
    try {
      await axios.delete(`${url}/contacts/delete/${data._id}`, {
        headers: {
          "x-access-token": token,
        },
      });
      dispatch({
        type: "DELETE_DATA_CONTACT",
        payload: data._id,
      });
      dispatch({
        type: "HIDE_DELETECONTACT_FORM",
      });
    } catch (error) {
      window.alert(
        `Unable to delete Contact because of ${error}, please contact our customer service.`
      );
    }
  };

  // return (dispatch) => {
  //   axios
  //     .delete(`${url}/contacts/delete/${description._id}`, description, {
  //       headers: { "x-access-token": token },
  //     })
  //     .then((response) => {
  //       dispatch({
  //         type: "DELETE_DATA_CONTACT",
  //         payload: description,
  //       });
  //       dispatch({
  //         type: "HIDE_DELETECONTACT_FORM",
  //       });
  //     })
  //     .catch((error) => {
  //       window.alert(
  //         `Unable to delete Contact because of ${error}, please contact our customer service.`
  //       );
  //     });
  // };
};

export const showEditForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_EDIT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideEditForm = () => {
  return {
    type: "HIDE_EDIT_FORM",
  };
};

export const showAboutForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_ABOUT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideAboutForm = () => {
  return {
    type: "HIDE_ABOUT_FORM",
  };
};

export const showAddContactForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_ADDCONTACT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideAddContactForm = () => {
  return {
    type: "HIDE_ADDCONTACT_FORM",
  };
};

export const showDeleteContactForm = (description) => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_DELETECONTACT_FORM",
      payload: description,
    });
  };
};

export const hideDeleteContactForm = () => {
  return {
    type: "HIDE_DELETECONTACT_FORM",
  };
};

export const showChangeImageForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_CHANGEIMAGE_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideChangeImageForm = () => {
  return {
    type: "HIDE_CHANGEIMAGE_FORM",
  };
};
