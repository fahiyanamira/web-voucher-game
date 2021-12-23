import { useState } from "react";
import Link from "next/dist/client/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSignIn } from "../../../services/auth";
import { useRouter } from "next/dist/client/router";
//import jwt decode:
// import jwt_decode from "jwt-decode";
// import cookies:
import Cookies from "js-cookie";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const route = useRouter();

  const onSubmit = async () => {
    //kumpulin value:
    const data = {
      email,
      password,
    };
    // cek isi data:
    // console.log("data: ", data);

    //validasi sign in email dan pass:
    if (email === "" || password === "") {
      toast.warn("Email dan password tidak boleh kosong 😐", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const response = await setSignIn(data);
      //kondisi responnya eror:
      if (response.error) {
        toast.error(response.message, {
          theme: "colored",
        });
      } else {
        //tidak eror:
        toast.success("Sign in berhasil", {
          theme: "colored",
        });

        //dapetin token:
        const token = response.data.token;
        //manipulasi token pake btoa(harus dlm string):
        const tokenBase64 = btoa(token);
        //simpen tokenBase64 kedalam cookies dgn expire selama 1 hari:
        Cookies.set("token", tokenBase64, { expires: 1 });
        // cek:
        // console.log("token: ", tokenBase64);
        //redirect ke landing page:
        route.push("/");
      }
    }
  };

  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
      <div className="pt-50">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">Email Address</label>
        <input type="email" className="form-control rounded-pill text-lg" aria-describedby="email" placeholder="Enter your email address" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="pt-30">
        <label className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input type="password" className="form-control rounded-pill text-lg" aria-describedby="password" placeholder="Your password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button type="button" className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">Sign Up</a>
        </Link>
      </div>
    </>
  );
}
