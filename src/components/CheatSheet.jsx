import { IoCloudDownloadOutline, IoDownloadOutline } from "react-icons/io5";

function CheatSheet() {
  return (
    <a href="/portfolio/assets/files/cheatsheet.pdf" download="CheatSheet_by_Vayo">
      <div className="gap-2-x p-5-x flex h-full w-full justify-between">
        <div className="gap-3-x flex flex-col">
          <h2>CheatSheet</h2>
          {/* <p>Just the Good Stuff I've gathered</p> */}
          <p>My stash of knowledge and tips</p>
        </div>

        <div className="text-2-x self-end">
          <IoCloudDownloadOutline />
        </div>
      </div>
    </a>
  );
}

export default CheatSheet;
