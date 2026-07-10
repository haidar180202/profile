import emart from "../assets/images/projectimage/emartreact.png";
import noteapp from "../assets/images/projectimage/noteapp.png";
import pokeapp from "../assets/images/projectimage/pokeapp.png";
import imdbclone from "../assets/images/projectimage/imdbclone.png";

export const portfolioProjects = [
  {
    id: "note-app",
    title: "note-app",
    image: noteapp,
    link: "https://noteapp-ruby.vercel.app/",
    description: "Simply React application with dummy data implementing state management and class/functional components to create a clean UI, sharing data seamlessly with props and custom handlers.",
    tags: ["React", "State Management", "Props", "CSS"]
  },
  {
    id: "emart-react",
    title: "emart-react",
    image: emart,
    link: "https://emartreact.vercel.app/",
    description: "Cart simulation e-commerce app featuring CRUD operations and RESTful API methods using Axios, coupled with predictable global state management powered by Redux.",
    tags: ["React", "Redux", "Axios", "REST API", "E-Commerce"]
  },
  {
    id: "imdb-clone-design",
    title: "imdb-clone-design",
    image: imdbclone,
    link: "https://tmdb-app-eight.vercel.app/",
    description: "Dynamic movie database clone implementing real-time data manipulation in React with RESTful fetch methods against the official TMDB external API.",
    tags: ["React", "TMDB API", "Fetch API", "Responsive UI"]
  },
  {
    id: "pokeapp",
    title: "pokeapp",
    image: pokeapp,
    link: "https://pokeapp-opal.vercel.app/",
    description: "Interactive Pokédex web app simulating CRUD operations and RESTful API calls with Axios. Implements complex state management with Redux middleware and custom UI design.",
    tags: ["React", "Redux Middleware", "Axios", "PokéAPI", "Tailwind CSS"]
  }
];
