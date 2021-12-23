import CheckoutConfirmation from "../components/organisms/CheckoutConfirmation";
import CheckoutDetail from "../components/organisms/CheckoutDetail";
import CheckoutItem from "../components/organisms/CheckoutItem";
import Image from "next/dist/client/image";
//import jwt decode:
// import jwt_decode from "jwt-decode";

export default function CheckOut() {
  // const { user } = props;
  // cek;
  // console.log("user: ", user);

  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="/#">
              <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutConfirmation />
        </div>
      </section>
    </>
  );
}

//cek private route didalem server side:
export async function getServerSideProps({ req }) {
  //cookies. nama cookiesnya token:
  const { token } = req.cookies;

  //kondisi kalau token tidak ada/user belom login:
  if (!token) {
    return {
      //arahin ke sign in
      redirect: {
        destination: "/sign-in",
        //tdk bersifat permanent. kalau sudah ada token akan diarahkan ke halaman checkout
        permanent: false,
      },
    };
  }

  return {
    //kalau sudah login
    props: {
      //ngirim data
      // user,
    },
  };
}
