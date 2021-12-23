import jwt_decode from "jwt-decode";
import TransactionsDetailContent from "../../../components/organisms/TransactionDetailContent";
import { getTransactionDetail } from "../../../services/player";

export default function TransactionsDetail(props) {
  const { transactionDetail } = props;
  //cek:
  // console.log("transaction: ", transactionDetail);

  return (
    <>
      <section className="transactions-detail overflow-auto">
        <TransactionsDetailContent data={transactionDetail} />
      </section>
    </>
  );
}

//cek private route didalem server side:
export async function getServerSideProps({ req, params }) {
  //cek:
  // console.log("params: ", params);

  const { idTrans } = params;
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
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  //panggil api
  const response = await getTransactionDetail(idTrans, jwtToken);

  //cek:
  // console.log("response: ", response);

  return {
    //kalau sudah login
    props: {
      //ngirim data
      transactionDetail: response.data,
    },
  };
}
