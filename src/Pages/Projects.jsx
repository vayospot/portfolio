import PageLayout from "../components/PageLayout";
import Glassmorphism from "../components/Glassmorphism";
import { Link } from "react-router";

function Projects() {
  return (
    <PageLayout title="Projects" useGlassmorphism={false}>
      <div className="gap-14-x flex flex-col">
        {PROJECTS.map(({ category, items }, index) => (
          <div key={index}>
            <h2 className="mb-10-x text-end">{category}</h2>
            <div className="gap-5-x grid grid-cols-[repeat(auto-fill,_minmax(min(50vmin,_300px),_1fr))]">
              {items.map(({ title, description, image, url }, index) => {
                const objectFitClass =
                  category === "Mobile" &&
                  title !== "CastVote" &&
                  title !== "BrukUp"
                    ? "object-contain" // Use object-contain for mobile apps
                    : "object-cover"; // Use object-cover for legacy mobile and all other categories

                const isMobileApp =
                  category === "Mobile" && objectFitClass === "object-contain";

                const appId = title.toLowerCase().replace(/\s/g, "");

                const cardContent = (
                  <Glassmorphism className="h-full">
                    <div className="gap-4-x flex h-full flex-col justify-between">
                      <div className="gap-2-x flex flex-col">
                        <p className="font-medium">{title}</p>
                        <p>{description}</p>
                      </div>
                      <div>
                        <img
                          src={image}
                          alt={title}
                          className={`w-full ${objectFitClass} ${category === "Mobile" ? "aspect-square" : "aspect-video"}`}
                        />
                      </div>
                    </div>
                  </Glassmorphism>
                );

                return isMobileApp ? (
                  <Link key={index} to={`/showcase/${appId}`}>
                    {cardContent}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {cardContent}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default Projects;

const PROJECTS = [
  {
    category: "Saas",
    items: [
      {
        title: "PostHint",
        description: "A new way to grow on 𝕏 (Twitter)",
        image: "/portfolio/assets/images/preview/posthint.webp",
        url: "https://posthint.net",
      },
      {
        title: "SnippetFuse",
        description:
          "A VSCode extension to easily package code snippets for AI chatbots",
        image: "/portfolio/assets/images/preview/snippetfuse.webp",
        url: "https://marketplace.visualstudio.com/items?itemName=vayospot.snippetfuse",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      {
        title: "DishSpot",
        description: "A food discovery app to help you decide what to eat next",
        image: "/portfolio/assets/images/preview/dishspot.webp",
        url: "https://github.com/vayospot/DishSpot",
      },
      {
        title: "CastVote",
        description: "A secure voting mobile app",
        image: "/portfolio/assets/images/preview/castvote.webp",
        url: "https://github.com/vayospot/CastVote#castvote-app",
      },
      {
        title: "BrukUp",
        description: "A mobile app for Breakups",
        image: "/portfolio/assets/images/preview/brukup.webp",
        url: "https://github.com/vayospot/BrukUp#bruk-up-app",
      },
    ],
  },
  {
    category: "Websites",
    items: [
      {
        title: "Slacker University",
        description:
          "A highly responsive university website that fit all screens",
        image: "/portfolio/assets/images/preview/slacker.webp",
        url: "https://vayospot.github.io/Slacker-University/",
      },
      {
        title: "CARLONY",
        description:
          "A car outlet that adopts the modern design and simplicity everyone likes",
        image: "/portfolio/assets/images/preview/carlony.webp",
        url: "https://vayospot.github.io/Carlony/",
      },
      {
        title: "PETLINE",
        description: "A pet store for everything pet related",
        image: "/portfolio/assets/images/preview/petline.webp",
        url: "https://vayospot.github.io/PETLINE/",
      },
      {
        title: "UNWINDCABINS",
        description:
          "A Tour website that's cloned perfectly from a figma template",
        image: "/portfolio/assets/images/preview/unwind.webp",
        url: "https://vayospot.github.io/Figma-Website-Clone/",
      },
    ],
  },
  {
    category: "Games",
    items: [
      {
        title: "The Mazee",
        description:
          "A maze game that's generated using DFS algorithm. It also has the ability to solve itself.",
        image: "/portfolio/assets/images/preview/mazee.webp",
        url: "https://vayospot.github.io/The-Mazee/",
      },
      {
        title: "Tic-Tac-Toe",
        description: "An unbeatable player vs computer Tic-Tac-Toe game.",
        image: "/portfolio/assets/images/preview/tictactoe.webp",
        url: "https://vayospot.github.io/tic-tac-toe.github.io/",
      },
    ],
  },
];
