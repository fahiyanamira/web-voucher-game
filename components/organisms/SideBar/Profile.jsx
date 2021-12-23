import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    //ambil token dari cookies:
    const token = Cookies.get("token");
    //kondisi kalau udah sign in, tokennya ada nailainya:
    if (token) {
      //balikin token yg udah dimanipulasi ke jwt:
      const jwtToken = atob(token);
      //dapetin payload data usernya:
      const payload = jwt_decode(jwtToken);
      const userFromPayload = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      {/* <img src="/img/avatar-1.png" width="90" height="90" className="img-fluid mb-20" /> */}
      <img src={user.avatar} width="90" height="90" className="img-fluid mb-20" alt="profile" style={{ borderRadius: "100%" }} />
      {/* <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2> */}
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      {/* <p className="color-palette-2 m-0">shayna@anne.com</p> */}
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
