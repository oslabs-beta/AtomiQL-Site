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
            text: "Setting Up Your Application"
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
            text: "Initialize Your Provider and Connect to React"
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
            text: "const url = 'http://localhost:4000'\n\nconst resolvers = {\n Pet: {\n  name(pet: any, _context: any, _c: any, _astNode: any) {\n   return ‘Jimmy’\n  },\n  createdAt() {\n   return 1000\n  }\n },\n}\n\nconst typedefs = gql`\n type Pet {\n  id: ID!\n  type: PetType!\n  name: String!\n  owner: User!\n  img: String!\n  createdAt: Int!\n }\n\nconst client = {\n url,\n resolvers,\n typeDefs\n}\n\nReactDOM.render(\n <React.StrictMode>\n  <AtomiProvider client={client}>\n   <App />\n  </AtomiProvider>\n </React.StrictMode>,\n document.getElementById('root')\n};"
          },
          {
            type: "docs-text",
            text: "That’s all we need to have AtomiQL ready! You’re now all set to create your first GraphQL query."
          },
          {
            type: "docs-text",
            text: "For more information on creating local resolvers, see the <a href='https://graphql.org/learn/execution/'>GraphQL documentation.</a>"
          }
        ],
        [
          {
            type: "docs-title",
            text: "Queries"
          },
          {
            type: "docs-text",
            text: "This section will demonstrate the use of the useQuery hook in your application to fetch GraphQL data and store it in React state. This article assumes that you have successfully set up your application and wrapped it in an AtomiProvider component. If not, check out our getting started guide."
          },
          {
            type: "docs-subtitle",
            text: "Fetching Data with useQuery"
          },
          {
            type: "docs-text",
            text: "useQuery is our custom React hook which takes a gql query string as a parameter and returns a result object containing loading, error, and data properties. The loading and error properties tell your application the status of the graphQL request. Once the request is returned, it is stored in the data property."
          },
          {
            type: "docs-text",
            text: "In order to create your first request with useQuery, first define the query to execute as a gql template literal."
          },
          {
            type: "docs-code",
            text: "const GET_PET = gql`\n query GetPetQuery {\n  pet {\n   name\n   id\n   createdAt\n   img\n  }\n }\n`"
          },
          {
            type: "docs-text",
            text: "Within your component that you want to query the server from, pass the query string into the useQuery hook to execute the query."
          },
          {
            type: "docs-code",
            text: "function PetsDisplay () {\n const [ data, loading, error ] = useQuery(GET_PET);\n\n if (loading) return <Loader />\n if (error) return <span>Error</span>\n\n return data.pet.map(pet => (\n  <div key={pet.id}>\n   <p>{pet.name}</pet>\n  </div>\n ))\n}"
          },
          {
            type: "docs-text",
            text: "The useQuery hook will execute once the component mounts and once the loading indicator passes, you should see your component fully rendered with the GraphQL data. And there we go! Congratulations on your first AtomiQL query."
          },
          {
            type: "docs-subtitle",
            text: "Variable Queries"
          },
          {
            type: "docs-text",
            text: "AtomiQL also supports dynamic queries through the “variables”' property passed in through the second useQuery parameter. For example, if your application only needs the data for one particular pet, you could edit the above GET_PETS query to include a variable input field."
          },
          {
            type: "docs-code",
            text: "const GET_PET_VAR = gql`\n query GetPetQuery ($input: PetsInput) {\n  pet(input: $input) {\n   name\n   id\n   createdAt\n   img\n   type\n  }\n }\n`"
          },
          {
            type: "docs-text",
            text: "We can then pass in an object with the “variables” property as the second useQuery parameter like so:"
          },
          {
            type: "docs-code",
            text: "const targetPetId = ‘123’\n\nconst [ data, loading, error ] = useQuery(GET_PET_VAR, {\n variables: {\n  input: {\n   id: targetPetId\n  }\n },\n})"
          },
          {
            type: "docs-text",
            text: "This query would only return data for the pet matching the id “123.”"
          },
          {
            type: "docs-subtitle",
            text: "Query Caching and Fetch Policy"
          },
          {
            type: "docs-text",
            text: "AtomiQL supports a cache-first fetch policy, wherein it automatically stores your query results into a cache of atoms using the query strings as keys. When React mounts a component that subsequently calls useQuery on the same query key, our application will access your data from the cache instead of making a duplicate request to the server. We plan to support other fetch policies in the near future so be on the lookout!"
          },
          {
            type: "docs-text",
            text: "AtomiQL also automatically detects cache invalidations within your application’s state across different queries. Cached data is normalized when stored so that we can see when any piece of data within a cached query has been altered since last populated. When AtomiQL detects that the data has changed, it evicts the existing atom cache and refreshes it by requerying the server."
          },
          {
            type: "docs-subtitle",
            text: "Fetching Local Data"
          },
          {
            type: "docs-text",
            text: "You can now fetch local data fields not in your GraphQL server-side schema through @client directives and isLocal parameters."
          },
          {
            type: "docs-text",
            text: "To return a mix of query data and local data, use @client directives to combine local data fields with the rest of your GraphQL query. In your query, simply denote the local data fields in your gql string with ‘@client’ like so:"
          },
          {
            type: "docs-code",
            text: "const GET_PETS = gql`\n query GetPets {\n  pets {\n   id\n   name\n   type\n   img\n   createdAt @client\n  }\n }\n`"
          },
          {
            type: "docs-text",
            text: "AtomiQL will procedurally exclude these fields from the query to the server, pull the data from any local state or resolver, and then return the merged data in one query result."
          },
          {
            type: "docs-text",
            text: "You can also customize your request to only target the cache or local data through the “isLocal” property on the second parameter. In order to restrict your query results such that it will never query the server, simply pass in an object with the property “isLocal” set to false into useQuery."
          },
          {
            type: "docs-code",
            text: "const [ data, loading, error ] = useQuery(GET_PET, { isLocal: true })"
          },
          {
            type: "docs-text",
            text: "Query results not found locally will simply return null."
          },
          {
            type: "docs-subtitle",
            text: "useQuery API"
          },
          {
            type: "docs-text",
            text: "The useQuery hook accepts the following parameters:"
          },
          //table 
        ],
        [
          {
            type: "docs-title",
            text: "Mutations"
          },
          {
            type: "docs-text",
            text: "This section will demonstrate the use of the useMutation hook in your application to update data on your backend. This article assumes that you have successfully set up your application and wrapped it in an AtomiProvider component. If not, check out our getting started guide."
          },
          {
            type: "docs-subtitle",
            text: "Mutating data with useMutation"
          },
          {
            type: "docs-text",
            text: "In order to use AtomiQL to mutate your GraphQL server data, first call useMutation from a component and pass in the GraphQL query string that represents the mutation. useMutation will return an array of the function which executes the mutation and an object containing the loading states of your mutation."
          },
          {
            type: "docs-text",
            text: "To call your first mutation, first import the useMutation hook from AtomiQL and then define your query mutation string."
          },
          {
            type: "docs-code",
            text: "import { useQuery, useMutation } from 'atomiql\n\nconst ADD_PET = gql`\n mutation AddPet($input: NewPetInput!) {\n  addPet(input: $input) {\n   id\n   name\n   type\n   img\n   owner {\n    id\n   }\n  }\n }\n`"
          },
          {
            type: "docs-text",
            text: "Once that’s done, you can call useMutation on the query."
          },
          {
            type: "docs-code",
            text: "const [addPet, newPet] = useMutation(ADD_PET)"
          },
          {
            type: "docs-subtitle",
            text: "Cache updates after mutation"
          },
          {
            type: "docs-text",
            text: "After data is altered on the backend, data within the cache may be invalidated. AtomiQL contains functionality which allows a callback function to be called after the mutation. This callback can be used to modify the existing cache like in the example below:"
          },
          {
            type: "docs-code",
            text: "const cacheEdit = (cacheContainer: any, { data: { addPet } }: any) => {\n const { data: { pets }, writeAtom } = cache.readQuery(GET_PETS);\n writeAtom({\n  pets: [addPet, ...pets]\n })\n}\n\nconst [addPet, newPet] = useMutation( ADD_PET, cacheEdit )"
          },
          {
            type: "docs-text",
            text: "Note that readQuery is a function used to read local state and cached data, while writeAtom is a React hook used to directly alter data within an atom. See our section on Managing Local State for details."
          },
          {
            type: "docs-subtitle",
            text: "Mutating local state and cache"
          },
          {
            type: "docs-text",
            text: "Local state and cache can be read and directly mutated through the use of writeQuery and readQuery hooks. These hooks are created and stored within AtomiQL’s context and can be accessed from anywhere in your application."
          },
          {
            type: "docs-text",
            text: "readQuery takes in a query string as a parameter and returns the cache container of the atom corresponding to that string."
          },
          {
            type: "docs-code",
            text: "const {data, writeAtom} = cache.readQuery(GET_PETS);"
          },
          {
            type: "docs-text",
            text: "writeQuery takes in a query string and a second parameter containing the updated cache data. You can call this function to directly alter the cache of an atom corresponding to that query."
          },
          {
            type: "docs-code",
            text: "writeQuery(GET_PETS, {...data, newData})"
          },
          {
            type: "docs-subtitle",
            text: "useMutation API"
          },
          {
            type: "docs-text",
            text: "The useMutation hook accepts the following parameters:"
          },
          //table
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
