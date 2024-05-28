import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

export const getAllUsers = async () => {
  try {
    const { data } = await axios(BASE_URL);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getSelectedUser = async (id) => {
  try {
    const { data } = await axios(`${BASE_URL}/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};
