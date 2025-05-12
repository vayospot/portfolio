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
    <div className="flex h-full w-full flex-col gap-3-x">
      <h1>
        Let's Build
        <br />
        Something
      </h1>

      <div className="flex flex-col gap-3-x">
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
