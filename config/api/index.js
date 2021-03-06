import axios from "axios";
import Cookies from "js-cookie";

//membuat function khusus panggil API yang dinamis
//ngirim request berupa object
export default async function callAPI({ url, method, data, token, serverToken }) {
  let headers = {};

  //server side
  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
    //client side
  } else if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  //cek:
  // console.log(response);

  //cek panjang objec response.datat. objectnya dijadiin array
  //kalau response.data > 1 => response.data
  //kalau response.data <= 1 => response.data.data
  const { length } = Object.keys(response.data);
  // console.log("length: ", length);
  const res = {
    error: false,
    message: "success",
    // data: length > 1 ? response.data : response.data.data,
    data: length > 1 ? response.data : response.data.data,
  };

  return res;
}
