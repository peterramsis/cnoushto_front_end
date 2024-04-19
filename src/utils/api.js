import axios from "axios";
import url from "./constants";

export const getData = ($loading, router) => {
  let loader = $loading.show({
    // Optional parameters
    container: false,
    canCancel: true,
    onCancel: () => {},
    color: "blue",
    backgroundColor: "#ccc",
    width: 200,
    height: 200,
    loader: "bars",
    opacity: 1,
  });

  return axios
    .get(url + router, {
      headers: {
        lan: localStorage.getItem("lan"),
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      loader.hide();
      return res.data;
    })
    .catch((err) => {
      loader.hide();
      return err;
    });
};
// 'content-type': 'multipart/form-data'
export const postData = (router, data, isUploadFile = false) => {
  return axios
    .post(url + router, data, {
      headers: {
        Accept: "application/json",
        lan: localStorage.getItem("lan"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": isUploadFile
          ? "multipart/form-data"
          : "application/json",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response.status == 422) {
        return err.response;
      }
    });
};

export const deleteData = (router) => {
  return axios
    .delete(router, {
      headers: {
        lan: localStorage.getItem("lan"),
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
export const editData = (router, data, isUploadFile = false) => {
  return axios
    .put(router, data, {
      headers: {
        Accept: "application/json",
        lan: localStorage.getItem("lan"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": isUploadFile
          ? "multipart/form-data"
          : "application/json",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response.status == 422) {
        return err.response;
      }
    });
};

export const updateDataAndUploadFiles = async (router, data) => {
  return axios
    .post(router, data, {
      headers: {
        lan: localStorage.getItem("lan"),
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response.status == 422) {
        return err.response;
      }
    });
};
