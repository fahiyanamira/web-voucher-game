import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { getMemberTransaction } from "../../../services/player";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

export default function TransactionContent() {
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filterTab, setFilterTab] = useState("all");

  // console.log("transactions: ", transactions);

  const getMemberTransactionAPI = useCallback(async (value) => {
    //panggil
    const response = await getMemberTransaction(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      //cek:
      // console.log("data total: ", response.data.total);
      // console.log("data transaksi: ", response.data);
      setTotalTransaction(response.data.total);
      setTransactions(response.data);
    }
  }, []);

  useEffect(() => {
    getMemberTransactionAPI("all");
  }, []);

  //button filter:
  const onFilterTabClick = (value) => {
    //set sesuai value yg dikirim:
    //value buat nentuin params
    setFilterTab(value);
    //panggil api biar nanti ubah data table nya:
    getMemberTransactionAPI(value);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1">
            <NumberFormat value={totalTransaction} prefix="Rp. " displayType="text" thousandSeparator="." decimalSeparator="," />
          </h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab onClick={() => onFilterTabClick("all")} title="All Trx" active={filterTab === "all"} />
              <ButtonTab onClick={() => onFilterTabClick("success")} title="Success" active={filterTab === "success"} />
              <ButtonTab onClick={() => onFilterTabClick("pending")} title="Pending" active={filterTab === "pending"} />
              <ButtonTab onClick={() => onFilterTabClick("failed")} title="Failed" active={filterTab === "failed"} />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {transactions.data?.map((transaction) => {
                  return (
                    <TableRow
                      key={transaction._id}
                      image={`https://bwastoregg.herokuapp.com/uploads/${transaction.historyVoucherTopup.thumbnail}`}
                      title={transaction.historyVoucherTopup.gameName}
                      // category={transaction.category}
                      item={`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}
                      price={transaction.value}
                      status={transaction.status}
                      id={transaction._id}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
