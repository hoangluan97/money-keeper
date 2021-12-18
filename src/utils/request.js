import axios from "axios";
import * as _ from "lodash";

export const fetch = async ({ url, headers, ...options }) => {
  try {
    return await axios({
      url: `${process.env.REACT_APP_URL_API}/v1/${url}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...options,
    });
  } catch (error) {
    console.log("📌 INFO ~ error", error.response);
    if (_.get(error.response, "data")) {
      return Promise.reject({
        data: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
      }).then();
    }
    Promise.reject("Server Error");
  }
};

export const fetchAuth = async ({ url, headers, ...options }) => {
  try {
    const token = localStorage.getItem("token");
    return await axios({
      url: `${process.env.REACT_APP_URL_API}/v1/${url}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...headers,
      },
      ...options,
    });
  } catch (error) {
    if (_.get(error.response, "data")) {
      return Promise.reject({
        data: error.response.data,
        status: error.response.status,
        statusText: error.response.statusText,
      }).then();
    }
    Promise.reject("Server Error");
  }
};
