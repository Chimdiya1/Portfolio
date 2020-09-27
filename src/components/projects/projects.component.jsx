import React from 'react';
import './projects.styles.scss'
import circle from './Group5.png';
import project from './PROJECTS.png';
import ProjectCard from '../projectCard/projectCard.component';

const projectsList = [
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223370/portfolio/culux.jpg',
    name: 'Culux Real Estate',
    description: 'Real estate listings platform',
    stack: 'React + Firebase + Redux + Styled Components',
    links: [
      'https://www.culuxrealestate.com',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223360/portfolio/igbo.jpg',
    name: 'Igbo Amaka',
    description: 'Landing Page for Igbo Amaka mobile app',
    stack: 'HTML + CSS + JS + GSAP ',
    links: [
      'https://igbo-amaka.netlify.app/',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1600986454/portfolio/blogysc.jpg',
    name: 'Blogy',
    description: 'Minimalist Blogging platform',
    stack: 'MongoDB + Express + Node + React ',
    links: [
      'https://bloggy11.netlify.app/',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223357/portfolio/port.jpg',
    name: 'My Portfolio',
    description: 'This surrent portfolio',
    stack: 'React + GSAP ',
    links: [
      'https://www.culuxrealestate.com',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223367/portfolio/chi-clothing.jpg',
    name: 'Chi Clothing',
    description: 'Fashion E-commerce store',
    stack: 'React + Redux + Styled Components + Firebase ',
    links: [
      'https://chi-clothing.herokuapp.com/',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223362/portfolio/principal.jpg',
    name: 'Principal Paints',
    description: 'Website for paint manufacturing company',
    stack: 'HTML + CSS + JS ',
    links: [
      'https://www.principalpaints.com/',
      'https://www.culuxrealestate.com/',
    ],
  },
  {
    imgUrl:
      'https://res.cloudinary.com/chimdia/image/upload/v1601223354/portfolio/huddle.jpg',
    name: 'Huddle',
    description: 'Landing page',
    stack: 'HTML + CSS + JS ',
    links: [
      'https://huddleinc.netlify.app/',
      'https://www.culuxrealestate.com/',
    ],
  },
];


const Projects = () => {
    return (
      <div className="projects" id="projects">
        <h2>Projects.</h2>
        <p className="check">Check out some projects I've worked on</p>
        <img className="circle" src={circle} alt="circle" />
        <img className="project" src={project} alt="project" />
        <div className="project-grid">
          {projectsList.map((item) => (
            <ProjectCard item={item} />
          ))}
       
        </div>
      </div>
    );
}
 
export default Projects;