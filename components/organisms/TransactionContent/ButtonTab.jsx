import classNames from "classnames";

export default function ButtonTab(props) {
  const { title, active, onClick } = props;
  const btnClass = classNames({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });
  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {title}
    </button>
  );
}
