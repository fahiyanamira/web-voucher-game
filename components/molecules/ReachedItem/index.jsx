export default function ReachedItem(props) {
  const { reachNumber, desc } = props;
  return (
    <>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{reachNumber}</p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
    </>
  );
}
