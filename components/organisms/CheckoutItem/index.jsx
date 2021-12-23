import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    category: {
      name: "",
    },
    thumbnail: "",
    name: "",
  });

  useEffect(() => {
    //ambil data-item di local storage:
    const dataFromLocal = localStorage.getItem("data-item");
    //diparse jadi objek:
    const dataItemLocal = JSON.parse(dataFromLocal);
    //set data dari data-item local storage
    setDataItem(dataItemLocal);

    //cek:
    // console.log("dataItemLocal: ", dataItemLocal);
  }, []);

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="cropped">
          <img src={`https://bwastoregg.herokuapp.com/uploads/${dataItem.thumbnail}`} className="img-fluid" alt="" />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          {/* Mobile Legends:
          <br /> The New Battle 2021 */}
          {dataItem.name}
        </p>
        <p className="color-palette-2 m-0">Category: {dataItem.category.name}</p>
      </div>
    </div>
  );
}
