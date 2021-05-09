import axios from "axios";

export const getData = async (path, data) => {
  const response = await axios.post(`${path}`, data, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return response;
};