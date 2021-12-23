import axios from "axios";
// import Cookies from "js-cookie";
import callAPI from "../config/api";

//panggil url di env:
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

//api landing page
export async function getFeaturedGame() {
  let response = await axios.get(`${ROOT_API}/api/v1/players/landingpage`);
  let axiosResponse = response.data;

  return axiosResponse.data;
}

//api detail voucher
export async function getDetailVoucher(id) {
  let response = await axios.get(`${ROOT_API}/api/v1/players/${id}/detail`);
  let axiosResponse = response.data;

  return axiosResponse.data;
}

//api game category
export async function getGameCategory() {
  let response = await axios.get(`${ROOT_API}/api/v1/players/category`);
  let axiosResponse = response.data;

  return axiosResponse.data;
}

//api post checkout
export async function setCheckout(data) {
  const url = `${ROOT_API}/api/v1/players/checkout`;

  return callAPI({
    url,
    method: "POST",
    data,
    token: true,
  });
}

//api profile member overview:
export async function getMemberOverview() {
  const url = `${ROOT_API}/api/v1/players/dashboard`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

//api member transaction:
export async function getMemberTransaction(valueParams) {
  let params = "";
  //kondisi:
  if (valueParams === "all") {
    params = "";
  } else {
    params = `?status=${valueParams}`;
  }
  const url = `${ROOT_API}/api/v1/players/history${params}`;

  return callAPI({
    url,
    method: "GET",
    token: true,
  });
}

//api member transaction detail:
export async function getTransactionDetail(id, token) {
  const url = `${ROOT_API}/api/v1/players/history/${id}/detail`;

  return callAPI({
    url,
    method: "GET",
    serverToken: token,
  });
}

//api update profile:
// export async function updateProfile(data, id) {
//   const url = `${ROOT_API}/api/v1/players/profile/${id}`;

//   return callAPI({
//     url,
//     method: "PUT",
//     data,
//     token: true,
//   });
// }

export async function updateProfile(data, id) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile/${id}`;

  return callAPI({
    url,
    method: "PUT",
    data,
    token: true,
  });
}
