import PageLayout from "../components/PageLayout";

function About() {
  const INFO = [
    "I just wanna build mobile apps.",
    "I once battled a turkey in a cage and won.",
    "I'm actually very good at researching; so far it is on the internet, I'd find it.",
    "I'm a big fan of Samsung.",
    "I sleep a lot.",
    "Transformers is the greatest franchise to ever grace this planet.",
    "A bird hasn't pooped on me before — like ever.",
    "No internet is better than extremely slow internet.",
    "Favorite drink: Nutri-Milk.",
    "I really cherish keeping memories... a lot.",
    `Grok once called me "you idiot"`,
  ];

  return (
    <PageLayout title="About" className="max-w-prose">
      <div className="gap-5-x flex flex-col">
        {INFO.map((info, index) => (
          <p key={index}>▪︎ {info}</p>
        ))}
      </div>
    </PageLayout>
  );
}

export default About;
