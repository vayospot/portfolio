import PageLayout from "../components/PageLayout";

function Articles() {
  const articles = groupArticlesByYear(ARTICLES);

  return (
    <PageLayout title="Articles" className="max-w-prose">
      <div className="gap-10-x flex flex-col">
        {articles.map(({ year, articles }, index) => (
          <div key={index} className="gap-6-x flex">
            <div>
              <p className="font-thin">{year}</p>
            </div>
            <div className="gap-6-x min-[580px]:gap-4-x flex grow flex-col">
              {articles.map(({ title, date, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:border-accent py-0.5-x gap-2-x flex justify-between border-b border-neutral-500"
                >
                  <p className="font-light">{title}</p>
                  <p className="font-thin whitespace-nowrap">
                    {new Date(date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default Articles;

const groupArticlesByYear = (articles) => {
  const groupedMap = new Map();

  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const article of articles) {
    const year = new Date(article.date).getFullYear();
    if (!groupedMap.has(year)) {
      groupedMap.set(year, []);
    }
    groupedMap.get(year).push(article);
  }

  return Array.from(groupedMap.entries()).map(([year, articles]) => ({
    year,
    articles,
  }));
};

const ARTICLES = [
  {
    title: "10 Best Alternatives To ChatGPT: Developer Edition",
    date: "2023-05-04",
    url: "https://semaphoreci.com/blog/chatgpt-alternatives",
  },
  {
    title: "Creating Resizable Split Panes From Scratch",
    date: "2024-01-12",
    url: "https://blog.openreplay.com/resizable-split-panes-from-scratch/",
  },
  {
    title:
      "How to Successfully Market Your App as a Developer in a Crowded Digital World",
    date: "2023-09-12",
    url: "https://semaphoreci.com/blog/app-marketing",
  },
  {
    title: "Flaky Tests In React: Detection, Prevention and Tools",
    date: "2024-03-27",
    url: "https://semaphoreci.com/blog/flaky-react",
  },
  {
    title: "Create A Modern Portfolio",
    date: "2024-02-25",
    url: "https://blog.openreplay.com/prepare-for-success--create-a-modern-portfolio/",
  },
  {
    title: "Building Mazes with Depth First Search: How-To Guide",
    date: "2023-07-24",
    url: "https://vayo.hashnode.dev/building-mazes-with-depth-first-search-how-to-guide",
  },
  {
    title: "How To Fix Flaky Tests in Rendering and Animation Workflows",
    date: "2024-05-22",
    url: "https://semaphoreci.com/blog/flaky-tests-ui",
  },
  {
    title: "Understand React Hooks With These Visual Guide Cheatsheets",
    date: "2024-05-11",
    url: "https://blog.openreplay.com/understand-react-hooks-with-these-visual-guide-cheatsheets/",
  },
  {
    title:
      "How Developers Can Strengthen Their Mental Health Amidst High-Pressure Projects",
    date: "2024-05-29",
    url: "https://www.smashingmagazine.com/2024/03/developers-strengthen-mental-health/",
  },
  {
    title: "Do's and Don'ts of Commenting Code",
    date: "2024-10-26",
    url: "https://blog.openreplay.com/dos-and-donts-of-commenting-code/",
  },
  {
    title: "Solo Development: Learning To Let Go Of Perfection",
    date: "2025-01-10",
    url: "https://www.smashingmagazine.com/2025/01/solo-development-learning-to-let-go-of-perfection/",
  },
  {
    title: "CSS min() All The Things",
    date: "2024-10-17",
    url: "https://www.smashingmagazine.com/2024/10/css-min-all-the-things/",
  },
  {
    title: "Previewing Content Changes In Your Work With document.designMode",
    date: "2025-03-21",
    url: "https://www.smashingmagazine.com/2025/03/previewing-content-changes-work-documentdesignmode/",
  },
  {
    title: "React Router for Beginners - A Complete 2023 Guide",
    date: "2023-10-19",
    url: "https://blog.openreplay.com/react-router-for-beginners--a-complete-2023-guide/",
  },
  {
    title: "16 Jobs That Will Never Be Replaced By AI",
    date: "2023-04-13",
    url: "https://medium.com/@vayospot/16-jobs-that-will-never-be-replaced-by-ai-5acae681bf",
  },
  {
    title: "The Transparent Speaker: Where Sound and Beauty Meet",
    date: "2023-03-25",
    url: "https://medium.com/@vayospot/the-transparent-speaker-where-sound-and-beauty-meet-648cbc883852",
  },
  {
    title: "Explaining `this` Keyword In JavaScript Like You're 5",
    date: "2023-02-23",
    url: "https://vayo.hashnode.dev/explaining-this-keyword-in-javascript-like-youre-five",
  },
  {
    title: "The Only Reason You Should Buy The Samsung Galaxy A54 5G",
    date: "2023-03-21",
    url: "https://medium.com/@vayospot/the-only-reason-you-should-buy-the-samsung-galaxy-a54-5g-7d5a10552ca6",
  },
  {
    title: "The Top 6 Samsung A Series To Buy In 2023",
    date: "2023-04-03",
    url: "https://medium.com/@vayospot/the-top-6-samsung-a-series-to-buy-in-2023-35a77a7b5325",
  },
  {
    title: "5 Popular Platforms That Aren’t Using AI — Yet",
    date: "2023-04-06",
    url: "https://medium.com/@vayospot/5-popular-platforms-that-arent-using-ai-yet-31e4859d1179",
  },
  {
    title:
      "CSS Cascade Layers Vs. BEM Vs. Utility Classes: Specificity Control",
    date: "2025-06-19",
    url: "https://www.smashingmagazine.com/2025/06/css-cascade-layers-bem-utility-classes-specificity-control/",
  },
  {
    title: "Integrating CSS Cascade Layers To An Existing Project",
    date: "2025-09-10",
    url: "https://www.smashingmagazine.com/2025/09/integrating-css-cascade-layers-existing-project/",
  },
];
