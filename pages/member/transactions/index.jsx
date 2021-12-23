// import jwt_decode from "jwt-decode";
import SideBar from "../../../components/organisms/SideBar";
import TransactionContent from "../../../components/organisms/TransactionContent";

export default function Transactions() {
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="transactions" />
        <TransactionContent />
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
  // //balikin token yg udah dimanipulasi ke jwt:
  // const jwtToken = Buffer.from(token, "base64").toString("ascii");
  // //dapetin payload data usernya:
  // const payload = jwt_decode(jwtToken);
  // const user = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  // user.avatar = `${IMG}/${user.avatar}`;

  return {
    //kalau sudah login
    // props: {
    //   //ngirim data
    //   user,
    // },
    props: {},
  };
}
