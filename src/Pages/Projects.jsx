import PageLayout from "../components/PageLayout";
import Glassmorphism from "../components/Glassmorphism";

function Projects() {
  return (
    <PageLayout title="Projects">
      <div className="flex flex-col gap-15">
        {PROJECTS.map(({ category, items }, index) => (
          <div key={index}>
            <h2 className="mb-10 text-end">{category}</h2>
            <div className="grid grid-cols-3 gap-5">
              {items.map(({ title, description, image, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Glassmorphism className="h-full">
                    <div className="flex h-full flex-col justify-between gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-medium">{title}</p>
                        <p className="text-sm">{description}</p>
                      </div>

                      <div>
                        <img
                          src={image}
                          alt={title}
                          className="w-full object-cover"
                        />
                      </div>
                    </div>
                  </Glassmorphism>
                </a>
              ))}
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
    category: "Mobile",
    items: [
      {
        title: "Slacker University",
        description:
          "A highly responsive university website that fit all screens",
        image: "https://placehold.co/600x400",
        url: "https://vayospot.github.io/Slacker-University/",
      },
      {
        title: "CARLONY",
        description:
          "A car outlet that adopts the modern design and simplicity everyone likes",
        image: "https://placehold.co/600x400",
        url: "https://vayospot.github.io/Carlony/",
      },
      {
        title: "PETLINE",
        description: "A pet store for everything pet related",
        image: "https://placehold.co/600x400",
        url: "https://vayospot.github.io/PETLINE/",
      },
    ],
  },
  {
    category: "Websites",
    items: [
      {
        title: "UNWINDCABINS",
        description:
          "A Tour website that's cloned perfectly from a figma template",
        image: "https://placehold.co/600x400",
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
        image: "https://placehold.co/600x400",
        url: "https://vayospot.github.io/The-Mazee/",
      },
      {
        title: "Tic-Tac-Toe",
        description: "An unbeatable player vs computer Tic-Tac-Toe game.",
        image: "https://placehold.co/600x400",
        url: "https://vayospot.github.io/tic-tac-toe.github.io/",
      },
    ],
  },
];
