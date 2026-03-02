import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router";

function GridItem({ title, content, link }) {
  return (
    <Link to={link || "#"} className="group block h-full w-full">
      <div className="gap-2-x p-5-x flex h-full w-full justify-between">
        <div className="gap-3-x flex flex-col">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        {link && (
          <div className="text-2-x group-hover:text-accent self-end transition-transform duration-300 group-hover:-rotate-45">
            <IoArrowForward />
          </div>
        )}
      </div>
    </Link>
  );
}

export default GridItem;
