function Connect() {
  const SOCIALS = [
    {
      name: "Twitter",
      url: "https://twitter.com/vayospot",
    },
    {
      name: "Github",
      url: "https://github.com/vayospot",
    },
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/vayospot",
    },
  ];

  return (
    <div className="gap-3-x p-5-x flex h-full w-full flex-col">
      <h1>
        Let's Build
        <br />
        Something
      </h1>

      <div className="gap-3-x flex flex-col">
        <div>
          <p className="text-neutral-400 italic">Email</p>
          <p>vayospot@gmail.com</p>
        </div>
        <div>
          <p className="text-neutral-400 italic">Socials</p>
          <ul>
            {SOCIALS.map(({ name, url }, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Connect;
