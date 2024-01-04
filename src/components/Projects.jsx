import React from 'react'
import kudosimg from '../resources/kudosimg.png'
import sereneimg from '../resources/sereneimg.png'
import portfolioimg from '../resources/portfolioimg.png'
import { Icon } from '@iconify/react';
const projects = [
  {
    image: kudosimg,
    title:"Kudos",
    desc: "Kudos is your personal social photo album, unlike the common social media apps. Built using ReactJS and tailwindCSS. Kudos uses appwrite for database. Its dynamic UI enhances engagement, resulting in a 30% increase in user satisfaction.",
    git: "https://github.com/manasacharyagit/Kudos",
    directlink: "",
  },
  {
    image: portfolioimg,
    title:"Personal Portfolio",
    desc: "My personal portfolio built using ReactJS and tailwindCSS. The use of React components enhances maintainability, contributing to a average 20% reduction in page load times.",
    git:"",
    directlink: "",
  },
  {
    
      image: sereneimg,
      title:"Serene - Weather app",
      desc: "Serene the weather app is built using ReactJS, tailwindCSS. Serene provides accurate weather information using OpenWeatherMap API. Over 10,000 downloads, helping users stay prepared for any forecast.",
      git:"https://github.com/manasacharyagit/serene",
      directlink: "https://serenemausam.vercel.app/",
    
  }
]

const Projects = () => {
  
  return (
    <div className=''>
    <div className='flex items-center justify-center'>
      <div className='text-7xl font-bold m-6'>Projects</div>
    </div>

    <div className='flex flex-col lg:flex-row lg:space-x-8 p-4 m-4 justify-center items-center'>
      {projects.map((project)=>(

       <div className="w-[300px] rounded-md shadow-2xl m-2 border-slate-200 bg-white border-4">
      <img
        src={project.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{project.title}</h1>
        <p className="mt-3 text-md text-gray-800">
          {project.desc}
        </p>
        <a href={project.git} target="_blank" className='inline-flex m-2'>
        <Icon icon="icon-park:github" className='text-2xl' />
        </a>
        <a href={project.directlink} target="_blank" className='inline-flex m-2'>
        <Icon icon="ph:link-bold" className='text-2xl' />
        </a>
      </div>
    </div> 

      ))}

    {/* <div className="w-[300px] rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About Macbook</h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div> */}

    


    </div>
    </div>
  )
}
export default Projects