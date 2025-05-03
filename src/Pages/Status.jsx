function Status() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2>Status</h2>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>
      <p>
        Currently working on <span className="italic">Portfolio</span>
      </p>
    </div>
  );
}

export default Status;
