import Link from "next/dist/client/link";

export default function LinkFooterItem(props) {
  const { linkName, href = "/" } = props;
  return (
    <>
      <Link className="mb-6" href={href}>
        <a className="text-lg color-palette-1 text-decoration-none">{linkName}</a>
      </Link>
      <br />
    </>
  );
}
