import Image from "next/dist/client/image";
import { useCallback, useEffect, useState } from "react";
import { setSignUp } from "../services/auth";
import { getGameCategory } from "../services/player";
//import toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/dist/client/router";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  //callback:
  const getGameCategoryApi = useCallback(async () => {
    let data = await getGameCategory();
    //cek:
    // console.log("data", data);

    setCategories(data);
    //ambil data id category pertama
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryApi();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm));
  }, []);

  //proses submit
  const onSubmit = async () => {
    // cek:
    // console.log("favorite: ", favorite);
    // console.log("image: ", image);

    //dapetin name, email, pass dari localstorage:
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm);
    //dapetin isian form:
    const data = new FormData();
    data.append("image", image);
    data.append("email", form.email);
    data.append("password", form.password);
    data.append("phoneNumber", "08123456789");
    data.append("username", form.name);
    data.append("name", form.name);
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    // //panggil
    const result = await setSignUp(data);
    // cek
    // console.log("result", result);
    // //kondisi kalau error munculin message error pake toast:
    if (result?.error === 1) {
      toast.error(`${result.message}`, {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
    } else {
      toast.success("Sign Up Berhasil!", {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      router.push("/sign-up-success");

      //remove user-form dari local storage:
      // localStorage.removeItem("user-form");
    }
  };

  return (
    <>
      <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
        <div className="container mx-auto">
          <form action="">
            <div className="form-input d-md-block d-flex flex-column">
              <div>
                <div className="mb-20">
                  <div className="image-upload text-center">
                    <label htmlFor="avatar">
                      {/* kondisi buat tampilin preview image. next image ga support blob */}
                      {/* blob: file local yg di set di upload photo */}
                      {imagePreview ? <img src={imagePreview} className="img-upload" alt="upload" /> : <Image src="/icon/upload.svg" width={120} height={120} alt="upload" />}
                    </label>
                    {/* inputan file beda */}
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        // console.log(event.target.files);s
                        const img = event.target.files[0];
                        setImagePreview(URL.createObjectURL(img));
                        return setImage(img);
                      }}
                    />
                  </div>
                </div>
                <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
                <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
                <div className="pt-50 pb-50">
                  <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                    Favorite Game
                  </label>
                  <select id="category" name="category" className="form-select d-block w-100 rounded-pill text-lg" aria-label="Favorite Game" value={favorite} onChange={(event) => setFavorite(event.target.value)}>
                    {categories.map((category) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="button-group d-flex flex-column mx-auto">
                <button type="button" className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16" onClick={onSubmit}>
                  Create My Account
                </button>

                <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="/#" role="button">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
