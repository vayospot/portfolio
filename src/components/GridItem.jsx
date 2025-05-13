import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";

function GridItem({ title, content, link }) {
  return (
    <Link to={link}>
      <div className="gap-2-x p-5-x flex h-full w-full justify-between">
        <div className="gap-3-x flex flex-col">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        {link && (
          <div className="text-2-x self-end">
            <IoArrowForward />
          </div>
        )}
      </div>
    </Link>
  );
}

export default GridItem;
