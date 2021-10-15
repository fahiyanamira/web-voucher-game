import classnames from "classnames";
import Link from "next/link";

export default function Menu(props) {
  const { title, active, href = "/" } = props;
  const classTitle = classnames({
    "nav-link": true,
    active: active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
