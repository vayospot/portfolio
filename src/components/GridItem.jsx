import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router";

function GridItem({ title, content, link }) {
  return (
    <Link to={link}>
      <div className="gap-2-x flex h-full w-full justify-between p-5-x">
        <div className="gap-3-x flex flex-col">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>

        {link && (
          <div className="text-3-x self-end">
            <IoIosArrowRoundForward />
          </div>
        )}
      </div>
    </Link>
  );
}

export default GridItem;
