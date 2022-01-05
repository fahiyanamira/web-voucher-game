import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { toast } from "react-toastify";
import { setCheckout } from "../../../services/player";

export default function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);

  const route = useRouter();

  const onSubmit = async () => {
    //ambil data dari localstorage:
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-topup");

    //ubah ke obj
    const dataItem = JSON.parse(dataItemLocal);
    const dataTopUp = JSON.parse(dataTopUpLocal);

    //kondisi checkbox
    if (checkbox === false) {
      toast.warning("Please check the checkbox if you already transferred the money ^^", {
        theme: "colored",
      });
      return;
    }

    //data yg diperluin:
    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankNameAccount,
      accountUser: dataTopUp.verifyID,
    };

    //pnaggil service
    const response = await setCheckout(data);
    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      route.push("/complete-checkout");
      toast.success("Checkout berhasil", {
        theme: "colored",
      });
    }
    //cek:
    // console.log("data: ", data);
  };

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" checked={checkbox} onChange={(event) => setCheckbox(!checkbox)} />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button type="button" className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg" onClick={onSubmit}>
          Confirm Payment
        </button>
      </div>
    </>
  );
}
