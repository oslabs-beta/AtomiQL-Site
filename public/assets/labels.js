export default {
  header: {
    logo: "/public/assets/img/atomiql-logo.png",
    headTitle: "High performance meets scalable flexibility",
    headSubtitle: "GraphQL client designed for Jotai",
    btnStart: "Get Started",
    npmPackageURL: "https://www.npmjs.com/package/atomiql",
  },
  about:
    "AtomiQL is the first GraphQL client that allows developers to reap the benefits of type-safety, UI and data layer logic separation, and a clean query language interface, while also maximizing front-end rendering performance with atomic state management. Especially with this increasing nature of frontend complexity, shifting towards atomic state management with the Jotai library can significantly reduce page load time and improve user experience through eliminating unnecessary re-renders.",
  docs: {
      nav: ["Getting Started", "Queries", "Mutations"],
      content: [
        [
          {
            type: "docs-title",
            text: "Getting Started"
          },
          {
            type: "docs-subtitle",
            text: "Setting up your application"
          },
          {
            type: "docs-text",
            text: "To walk through this tutorial, we recommend you either create a new React project locally with Create React App, or create a new React sandbox on CodeSandbox. Once your React application is set up, simply install the packages you’ll need."
          },
          {
            type: "docs-code",
            text: "$ npm install atomiql jotai graphql-request"
          },
          {
            type: "docs-text",
            text: "atomiql: This package contains everything you’ll need to set up your AtomiQL client."
          },
          {
            type: "docs-text",
            text: "jotai: This package contains the atomic state management which AtomiQL uses to store query results as your application’s state."
          },
          {
            type: "docs-text",
            text: "graphql-request: This package contains logic to make and receive GraphQL queries to your server."
          },
          {
            type: "docs-subtitle",
            text: "Initialize your provider and connect to React"
          },
          {
            type: "docs-text",
            text: "AtomiProvider connects to React similar to React’s Context.Provider and allows your application to access state from anywhere. In index.js, let’s first import the AtomiProvider container."
          },
          {
            type: "docs-code",
            text: "import { AtomiProvider } from 'atomiql';"
          },
          {
            type: "docs-text",
            text: "Next, we’ll wrap our React <App /> with AtomiProvider around all stateful components connected to GraphQL."
          },
          {
            type: "docs-code",
            text: "const url = 'http://localhost:4000'"
          },
        ],
        [
          {
            type: "docs-text",
            text: "Testing"
          }
        ],
        [
          {
            type: "docs-text",
            text: "Testing"
          }
        ]
      ]
  },
  team: {
    title: "Meet the Team",
    members: [
      {
          photo: "/public/assets/img/pat.png",
          name: "Patrick Liu",
          github: "@ptrkliu",
          title: "Software Engineer",
          githubURL: "https://github.com/ptrkliu",
          linkedinURL: "https://www.linkedin.com/in/ptrkl/",
      },
      {
          photo: "/public/assets/img/paulo.png",
          name: "Paulo Choi",
          github: "@paulochoi",
          title: "Software Engineer",
          githubURL: "https://github.com/paulochoi",
          linkedinURL: "https://www.linkedin.com/in/paulochoi/",
      },
      {
          photo: "/public/assets/img/thomas.png",
          name: "Thomas Harper",
          github: "@tommyrharper",
          title: "Software Engineer",
          githubURL: "https://github.com/tommyrharper",
          linkedinURL: "https://www.linkedin.com/in/thomas-robert-harper/",
      },
      {
          photo: "/public/assets/img/xiao.png",
          name: "Xiaotong Li",
          github: "@xiaotongli",
          title: "Software Engineer",
          githubURL: "https://github.com/xiaotongli",
          linkedinURL: "https://www.linkedin.com/in/lixiaotong/",
      },
    ],
  },
  footer: {
    linkSections: ["Product", "Getting Started", "Social Media"],
    links: [
      [
        {
          title: "Overview",
          linkURL: "/",
        },
        {
          title: "Features",
          linkURL: "/",
        },
        {
          title: "API Specifications",
          linkURL: "/",
        }
      ],
      [
        {
          title: "Github",
          linkURL: "https://github.com/oslabs-beta/AtomiQL",
        },
        {
          title: "NPM Package",
          linkURL: "https://www.npmjs.com/package/atomiql",
        },
      ],
      [
        {
          title: "LinkedIn",
          linkURL: "/",
        },
        {
          title: "Medium",
          linkURL: "/",
        },
      ]
    ],
  copyright: "Established 2021"
  }
};
