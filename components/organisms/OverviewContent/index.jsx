import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMemberOverview } from "../../../services/player";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  // console.log("count: ", counts);
  // console.log("daa: ", data);
  // console.log("data: ", data.data);

  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();
    //kondisi responnya eror:
    if (response.error) {
      toast.error(response.message, {
        theme: "colored",
      });
    } else {
      // cek:
      // console.log("data counts: ", response.data.counts);
      // console.log("data: ", response.data);

      setCount(response.data.counts);
      setData(response.data);
    }
  }, []);

  //panggil api:
  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count?.map((item) => {
                return (
                  <Category key={item._id} nominal={item.value} icon="ic-desktop">
                    {item.name}
                  </Category>
                );
              })}
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.data?.map((dataItem) => {
                  return (
                    <TableRow
                      key={dataItem._id}
                      image={`https://bwastoregg.herokuapp.com/uploads/${dataItem.historyVoucherTopup.thumbnail}`}
                      title={dataItem.historyVoucherTopup.gameName}
                      category={dataItem.category.name}
                      item={`${dataItem.historyVoucherTopup.coinQuantity} ${dataItem.historyVoucherTopup.coinName}`}
                      price={dataItem.value}
                      status={dataItem.status}
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
