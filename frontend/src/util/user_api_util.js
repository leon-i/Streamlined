import axios from "axios";

export const addToCart = (data) => {
  return axios.post("/api/users/addToCart/", { params: data });
};
