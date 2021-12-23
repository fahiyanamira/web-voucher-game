import axios from "axios";

//panggil url di env:
const ROOT_API = process.env.NEXT_PUBLIC_API;

//api signup:
export async function setSignUp(data) {
  const response = await axios.post(`${ROOT_API}/api/v1/auth/signup`, data).catch((err) => err.response); //kalau terjadi error

  //cek:
  //   console.log("respon api:", response);
  const axiosResponse = response.data;

  //kondisi:
  if (axiosResponse.error === 1) return axiosResponse;

  return axiosResponse.data;
}

//api signin
export async function setSignIn(data) {
  // const url = `${ROOT_API}/api/v1/auth/signin`;
  const response = await axios.post(`${ROOT_API}/api/v1/auth/signin`, data).catch((err) => err.response); //kalau terjadi error

  //kondisi kalau res status diatas 300 (error):
  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: "",
    };
    return res;
  }
  //respon sukses:
  const res = {
    error: false,
    message: "success",
    data: response.data.data,
  };

  return res;
}
