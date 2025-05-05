import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

function GridItem({ title, content, link }) {
  return (
    <Link to={link}>
      <div className="flex h-full w-full justify-between gap-2">
        <div className="flex flex-col gap-3">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        {link && (
          <div className="self-end text-2xl">
            <IoIosArrowRoundForward />
          </div>
        )}
      </div>
    </Link>
  );
}

export default GridItem;
