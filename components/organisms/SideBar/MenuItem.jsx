import classNames from "classnames";
import Image from "next/image";

export default function MenuItem(props) {
  const { title, icon, active } = props;
  //import className dari node modules:
  const classItem = classNames({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <div class="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
