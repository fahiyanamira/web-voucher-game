import Link from "next/link";
import { useEffect, useState } from "react";
// import cookies:
import Cookies from "js-cookie";
//import jwt decode:
import jwt_decode from "jwt-decode";
import { useRouter } from "next/dist/client/router";

export default function Auth(props) {
  // const { isLogin } = props;

  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    // email: "",
    // id: "",
    // phoneNumber: "",
    // username: "",
  });

  const route = useRouter();

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
      // user.avatar = `https://res.cloudinary.com/dypyycy6g/image/upload/${userFromPayload.avatar}`;
      setIsSignIn(true);
      setUser(userFromPayload);
    }

    //cek:
    // console.log("player: ", user);
  }, []);

  const logOut = () => {
    // remove token cookiesnya:
    Cookies.remove("token");
    //arahin ke halaman lading page:
    route.push("/");
    setIsSignIn(false);
  };

  if (isSignIn) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a className="dropdown-toggle ms-lg-40" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.avatar} className="rounded-circle" width="40" height="40" alt="" />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li>
              <Link href="/member">
                <a className="dropdown-item text-lg color-palette-2">My Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="dropdown-item text-lg color-palette-2">Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/member/edit-profile">
                <a className="dropdown-item text-lg color-palette-2">Account Settings</a>
              </Link>
            </li>
            <li>
              <a className="dropdown-item text-lg color-palette-2" onClick={logOut}>
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button">
          Sign In
        </a>
      </Link>
    </li>
  );
}
