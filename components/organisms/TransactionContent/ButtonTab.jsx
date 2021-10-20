import classNames from "classnames";

export default function ButtonTab(props) {
  const { title, active } = props;
  const btnClass = classNames({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });
  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
