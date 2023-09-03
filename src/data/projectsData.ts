import {plantaeaImages, topicastImages, cozyGameHubImages} from "./projectsImages";

interface IImage {
    src: string;
    width: number;
    height: number;
}

interface IProjectData {
    id: string;
    name: string;
    descriptions: string;
    toolsUsed: Array<string>;
    images: Array<IImage>;
    link: string;
}

const projectsData: IProjectData[] = [
    {
        id: 'plantaea',
        name: 'Plantaea',
        descriptions: 'This project is the thesis of me and my groupmates in College. It is the byproduct of an idea to reintroduce the topic of ethnobotany to the masses, to allow them to learn and understand the various plants around them and their uses. In this project, I was one of the developers involved in the front-end and the back-end development. With a focus on the development of the GIS Mapping functionality.',
        toolsUsed : [
            'Figma',
            'Android Studio',
            'Visual Studio Code',
            'Github',
            'React Native',
        ],
        images: Object.values(plantaeaImages).map((imageDetails) => ({
            src: imageDetails,
            width: 200,
            height: 350,
        })),
        link: 'https://github.com/CSC-Odyssey/plantaea.git',
    }, {
        id: 'cozy-game-hub',
        name: 'Cozy Game Hub',
        descriptions: 'This is a self-done project to attempt to create a Steam-like clone that allows users to view games. Utilizing Rawg.io as the basis for the design and its API to retrieve the necessary information, it was built using React and Typescript.',
        toolsUsed : [
            'Visual Studio Code',
            'Github',
            'React',
            'Typescript',
            'Chakra UI',
            'Rawg.io API',
        ],
        images: Object.values(cozyGameHubImages).map((imageDetails) => ({
            src: imageDetails,
            width: 500,
            height: 250,
        })),
        link: 'https://cozy-game-hub.vercel.app/',
    }, {
        id: 'water-refilling-station',
        name: 'Water Refilling Station Website',
        descriptions: 'This self-made project is a collaboration with a fellow developer with the intent of creating a webpage for a family water refilling station business. Currently, it is still in development.',
        toolsUsed : [
            'Visual Studio Code',
            'Github',
            'React',
            'Typescript',
        ],
        images: [],
        link: 'https://github.com/Cozy-Benchmark/water-station.git',
    }, {
        id: 'topicast',
        name: 'Topicast',
        descriptions: 'This project was built by a team with the goal of using a topic modeling model in order to extract decision-making insights from news articles about Baguio City. For the proof of concept, a web application integrated with the model was developed.',
        toolsUsed: [
            'Python',
            'HTML',
            'CSS',
            'React',
            'Falsk'
        ],
        images: Object.values(topicastImages).map((imageDetails) => ({
            src: imageDetails,
            width: 500,
            height: 250,
        })),
        link: 'https://github.com/CSC-Odyssey/tourist-spots-analysis.git',
    }
]

export default projectsData;