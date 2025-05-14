function Lifespan() {
  const MONTHS_IN_HUNDRED_YEARS = 1200;

  const birthDate = new Date(2000, 8, 19);
  const now = new Date();
  const monthsLived =
    (now.getFullYear() - birthDate.getFullYear()) * 12 +
    (now.getMonth() - birthDate.getMonth());

  return (
    <div className="p-5-x flex h-full w-full">
      <div className="gap-1-x flex flex-wrap">
        {Array.from({ length: MONTHS_IN_HUNDRED_YEARS }, (_, index) => (
          <div
            key={index}
            className={`h-[2px] w-[2px] rounded-full bg-white/40`}
            style={{
              backgroundColor: index < monthsLived && "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Lifespan;
