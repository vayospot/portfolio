function Status() {
  return (
    <div className="flex h-full w-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2>Status</h2>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>

      {/* If you’re working on something, just write “Working on a ???”. It can link it to what you’re working on. If you don’t want to be disturbed, status can turn red */}
      <p>I'm here, you're here — and yes, I'm open to new roles.</p>
    </div>
  );
}

export default Status;
