import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organisms/SideBar";
import { updateProfile } from "../../services/player";

export default function EditProfile() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  // console.log("data user: ", user);

  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

  useEffect(() => {
    //panggil cookies dapetin token
    const token = Cookies.get("token");
    if (token) {
      //balikin token yg udah dimanipulasi ke jwt:
      const jwtToken = atob(token);
      //dapetin payload data usernya:
      const payload = jwt_decode(jwtToken);
      const userFromPayload = payload.player;
      setUser(userFromPayload);
    }
  }, []);

  const onSubmit = async () => {
    //cek
    // console.log("data: ", user);

    const data = new FormData();
    data.append("image", user.avatar);
    data.append("name", user.name);
    data.append("phoneNumber", user.phoneNumber);
    const response = await updateProfile(data, user.id);

    if (response.error) {
      toast.error(response.message);
    } else {
      //cek:
      // console.log("data: ", response);
      //remove token
      Cookies.remove("token");
      //logout, trus signin
      router.push("/sign-in");
    }
  };
  return (
    <>
      <section className="edit-profile overflow-auto">
        <SideBar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img src={imagePreview} width="90" height="90" alt="icon upload" style={{ borderRadius: "100%" }} />
                      ) : (
                        <img src={user.avatar} width="90" height="90" alt="icon upload" style={{ borderRadius: "100%" }} />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        setImagePreview(URL.createObjectURL(event.target.files[0]));
                        return setUser({
                          ...user,
                          avatar: event.target.files[0],
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Fullname"
                    value={user.name}
                    onChange={(event) => {
                      return setUser({
                        ...user,
                        name: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className="pt-30">
                  {/* <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Email
                  </label>
                  <input type="text" disabled className="form-control rounded-pill text-lg" id="email" name="email" aria-describedby="email" value={user.email} /> */}
                  <Input label="Email" disabled value={user.email} />
                </div>
                <div className="pt-30">
                  <Input
                    label="Phone Number"
                    value={user.phoneNumber}
                    onChange={(event) => {
                      return setUser({
                        ...user,
                        phoneNumber: event.target.value,
                      });
                    }}
                  />
                </div>

                <div className="button-group d-flex flex-column pt-50">
                  <button type="button" className="btn btn-save fw-medium text-lg text-white rounded-pill" onClick={onSubmit}>
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
