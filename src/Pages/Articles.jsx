import PageLayout from "../components/PageLayout";

function Articles() {
  const articles = groupArticlesByYear(ARTICLES);

  return (
    <PageLayout title="Articles" className="max-w-prose">
      <div className="flex flex-col gap-8">
        {articles.map(({ year, articles }, index) => (
          <div key={index} className="flex gap-5">
            <div>
              <p>{year}</p>
            </div>
            <div className="flex grow flex-col gap-4">
              {articles.map(({ title, date, url }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex justify-between border-b border-neutral-500 py-0.5"
                >
                  <p className="font-normal">{title}</p>
                  <p className="whitespace-nowrap">
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
    title: "Understanding Flexbox: A Beginner’s Guide to CSS Layouts",
    date: "2025-04-15",
    url: "https://devarticles.example.com/understanding-flexbox-guide",
  },
  {
    title: "What’s New in React 19 and How to Use It",
    date: "2025-02-28",
    url: "https://devarticles.example.com/whats-new-in-react-19",
  },
  {
    title: "Top 10 Web Performance Optimization Techniques in 2024",
    date: "2024-11-10",
    url: "https://devarticles.example.com/web-performance-2024",
  },
  {
    title: "A Deep Dive Into Next.js Routing Strategies",
    date: "2024-08-05",
    url: "https://devarticles.example.com/nextjs-routing-strategies",
  },
  {
    title: "Modern JavaScript Features You Should Be Using in 2023",
    date: "2023-12-17",
    url: "https://devarticles.example.com/js-features-2023",
  },
  {
    title: "How to Build a Scalable Web App with Node.js and Express",
    date: "2023-09-25",
    url: "https://devarticles.example.com/scalable-node-express",
  },
  {
    title: "Exploring Tailwind CSS in Real World Projects",
    date: "2023-06-13",
    url: "https://devarticles.example.com/tailwind-css-projects",
  },
  {
    title: "Web Accessibility: Making Your Site Usable for Everyone",
    date: "2023-04-01",
    url: "https://devarticles.example.com/web-accessibility-guide",
  },
  {
    title: "Integrating GraphQL in Full Stack Applications",
    date: "2022-11-22",
    url: "https://devarticles.example.com/graphql-fullstack",
  },
  {
    title: "CSS Grid vs Flexbox: When to Use Which?",
    date: "2022-10-03",
    url: "https://devarticles.example.com/css-grid-vs-flexbox",
  },
  {
    title: "Building a REST API with Python Flask",
    date: "2022-07-19",
    url: "https://devarticles.example.com/flask-rest-api",
  },
  {
    title: "Beginner’s Guide to Progressive Web Apps (PWAs)",
    date: "2022-05-09",
    url: "https://devarticles.example.com/pwa-beginners-guide",
  },
  {
    title: "How to Secure Your Web App with JWT and OAuth",
    date: "2022-03-14",
    url: "https://devarticles.example.com/secure-web-jwt-oauth",
  },
  {
    title: "The Rise of Headless CMS: What Developers Should Know",
    date: "2023-01-20",
    url: "https://devarticles.example.com/headless-cms-guide",
  },
  {
    title: "Debugging JavaScript: Tools and Techniques for 2024",
    date: "2024-05-30",
    url: "https://devarticles.example.com/debugging-js-2024",
  },
  {
    title: "Serverless Architecture Explained for Frontend Developers",
    date: "2024-03-08",
    url: "https://devarticles.example.com/serverless-for-frontend",
  },
  {
    title: "Understanding the Virtual DOM in React",
    date: "2022-08-29",
    url: "https://devarticles.example.com/virtual-dom-react",
  },
  {
    title: "Deploying Web Apps with Docker and Kubernetes",
    date: "2023-07-11",
    url: "https://devarticles.example.com/docker-kubernetes-deploy",
  },
  {
    title: "Using TypeScript with Vue 3: Best Practices",
    date: "2024-06-18",
    url: "https://devarticles.example.com/typescript-vue3-best-practices",
  },
  {
    title: "Micro Frontends: Breaking Down the Monolith",
    date: "2025-03-12",
    url: "https://devarticles.example.com/micro-frontends-guide",
  },
];
