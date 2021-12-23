import OverviewContent from "../../components/organisms/OverviewContent";
import SideBar from "../../components/organisms/SideBar";
import jwt_decode from "jwt-decode";

export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar activeMenu="overview" />
        <OverviewContent />
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
  //balikin token yg udah dimanipulasi ke jwt:
  const jwtToken = Buffer.from(token, "base64").toString("ascii");
  //dapetin payload data usernya:
  const payload = jwt_decode(jwtToken);
  const userFromPayload = payload.player;
  // const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `https://bwastoregg.herokuapp.com/uploads${userFromPayload.avatar}`;

  return {
    //kalau sudah login
    props: {
      //ngirim data
      user: userFromPayload,
    },
  };
}
