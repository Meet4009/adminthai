import axios from "../plugins/axios";

// Deposites all API
export const getPendingDeposite = async () => {
  return await axios.get("/admin/payment/pending/deposits");
};

export const setApproveDeposite = async (id) => {
  return await axios.get(`/admin/payment/deposit/approve/${id}`);
};

export const setRejecteDeposite = async (id) => {
  return await axios.get(`/admin/payment/deposit/reject/${id}`);
};

export const getApprovedDeposite = async () => {
  return await axios.get("/admin/payment/approved/deposits");
};

export const getRejectedDeposite = async () => {
  return await axios.get("/admin/payment/rejected/deposits");
};

export const getAllDeposite = async () => {
  return await axios.get("/admin/payment/deposits");
};

// Withdrawals all API

export const getPendingWithdrawals = async () => {
  return await axios.get("/admin/payment/pending/withdrawals");
};

export const setApproveWithdraw = async (id) => {
  return await axios.get(`/admin/payment/withdraw/approve/${id}`);
};

export const setRejecteWithdraw = async (id) => {
  return await axios.get(`/admin/payment/withdraw/reject/${id}`);
};

export const getApprovedWithdrawals = async () => {
  return await axios.get("/admin/payment/approved/withdrawals");
};

export const getRejectedWithdrawals = async () => {
  return await axios.get("/admin/payment/rejected/withdrawals");
};

export const getAllWithdrawals = async () => {
  return await axios.get("/admin/payment/withdrawals");
};

// Loser
export const setLoser = async (id) => {
  return await axios.get(`/admin/lottery/loss-buyer/${id}`);
};

// get price
export const getPriceList = async () => {
  return await axios.get("/admin/lottery-price");
};

// winner
export const setWinner = async (id, payload) => {
  return await axios.post(`/admin/lottery/win-buyer/${id}`, payload);
};

// winner-space
export const getWinnerSpace = async (id) => {
  return await axios.get(`/admin/lottery/winner-space/${id}`);
};

// const axios = require('axios');
// let data = JSON.stringify({
//   "lottery_price_id": "66b5de95b52f24b336b7fdcc"
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://thailottery.onrender.comthailottery/api/admin/lottery/win-buyer/66b77d22ae5e0b5d36cadaa6',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
