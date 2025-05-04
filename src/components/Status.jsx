function Status() {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2>Status</h2>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>

      {/*This span should be a link that links to anything currently working on */}
      <p>
        Working on <span className="italic">a side project</span>
      </p>
    </div>
  );
}

export default Status;
