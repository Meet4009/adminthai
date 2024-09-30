import axios from "../plugins/axios";

export const allWinner = async () => {
  return await axios.get("/admin/lottery/all-winner");
};

export const dashboard = async () => {
  return await axios.get("/admin/dashboard");
};

export const getUserData = async () => {
  return await axios.get("/admin/users");
};

export const getLotteriesData = () => {
  return axios.get("/admin/lottery/all-lottery");
};

export const getChooseWinnerData = () => {
  return axios.get("/admin/lottery/choose-winner");
};

export const getSingleUserDetails = ({ params }) => {
  let id = params.id;
  return axios.get(`/admin/user/${id}`);
};

export const setUserData = (id, payload) => {
  return axios.put(`/admin/user/${id}`, payload);
};

// User all deposite history
// export const getAllDepositeHistory = (id) => {
//   return axios.get(`/admin/payment/deposit-history/${id}/`);
// };
