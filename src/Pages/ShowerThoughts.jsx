import PageLayout from "../components/PageLayout";
import shuffle from "../utils/shuffle";

const RAW_THOUGHTS = [
  {
    title: "WorldBook",
    content: [
      "A platform where you store your digital footprint for eons to come that we'd try to keep alive for as long as we can",
      "We can group it by countries or not cause I'd like to keep personal datas given as low as possible because of government or hackers",
      "You can just put your name, a picture you'd like to be remembered by(it doesn't have to be your birth name) and other fun details like words you'd like to be remembered by... basically like a lifelong yearbook",
    ],
  },
  {
    title: "Consent App",
    content: ["Yep, an app for consent from a significant other"],
  },
  {
    title: "SinkedIn",
    content: [
      "An app to post about our failures and fuckups",
      "Opposite of Linkedin",
    ],
  },
  {
    title: "EscapeRoom",
    content: [
      "A game where you find each other then escape together... this is something beautiful",
    ],
  },
  {
    title: "The Watchroom",
    content: [
      "I don't know about this but it's similar to Omegle... i want like a video kinda thing...",
      "It could be like how zoom is and everyone just watch and talk... minimum of 4 people....",
      "Nah, not sure about this, I don't know what I was thinking when I had this idea",
    ],
  },
  {
    title: "Virtual Speed Dating",
    content: [
      "Get a date asap in 24hours...",
      "Other users would be your wingman that'd find a match for a fellow user that needs a date night coming up....",
    ],
  },
];

// Shuffles only once, when the module is loaded
const SHUFFLED_THOUGHTS = shuffle(RAW_THOUGHTS);

function ShowerThoughts() {
  return (
    <PageLayout title="Shower Thoughts" className="max-w-prose">
      <p>You know... those little ideas that pop into your head.</p>
      <div className="gap-10-x flex flex-col">
        {SHUFFLED_THOUGHTS.map(({ title, content }, index) => (
          <div key={index} className="gap-3-x flex flex-col">
            <div className="gap-3-x flex items-center">
              <h2>{title}</h2>
              <span className="h-[1px] grow bg-white/15" />
            </div>
            {content.map((paragraph, index) => (
              <p key={index}>▪︎ {paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default ShowerThoughts;
