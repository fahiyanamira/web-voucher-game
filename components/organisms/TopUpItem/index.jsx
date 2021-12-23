export default function TopUpItem(props) {
  const { type, data } = props;

  if (type === "desktop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {/* Mobile Legends:
          <br />
          The New Battle 2021 */}
          {data.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: {data.category.name}</p>
      </div>
    );
  }

  // const URL_IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        {/* <img src={`https://bwastoregg.herokuapp.com/uploads/${data.voucher.thumbnail}`} width="280" height="380" className="img-fluid" alt="" /> */}
        <img src={`https://bwastoregg.herokuapp.com/uploads/${data.thumbnail}`} width="280" height="380" className="img-fluid" alt="" />
      </div>

      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {/* Mobile Legends:
          <br />
          The New Battle 2021 */}
          {data.name}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">Category: {data.category.name}</p>
      </div>
    </div>
  );
}
