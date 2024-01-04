import React from 'react'
import homecover from '../resources/homecover.png'
import { Icon } from '@iconify/react';
import coffee from '../resources/coffeepic.png'
import '../styles/Home.css'
import { Footer } from './Footer';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-indigo-100'>

    <div className="text-left mt-6 md:ml-2 sm:ml-2 sm:p-4 md:p-4 ">
      <div >
        <p className=' text-6xl md:text-7xl lg:text-7xl xl:text-7xl my-4 font-semibold animate-fade-right animate-delay-[100ms] animate-duration-[6000ms]'>Mantra</p>
      </div>
      <div>
        <p className='text-7xl md:text-9xl lg:text-9xl xl:text-9xl mt-4 font-semibold animate-fade-left animate-delay-[100ms] animate-duration-[6000ms]'>
        Manas Acharya .
        </p>
      </div>
      {/* <img src={homecover}
      className='w-120 h-auto ' alt="" />
       */}
      <div className=' flex items-center justify-center space-x-6 text-slate-700 shadow-2xl m-8  rounded-3xl p-4'>
          
          <a href="https://www.instagram.com/manasacharya_17/" className='space-x-4 hover:scale-110'>
          <Icon className=" text-2xl lg:text-4xl" icon="bi:instagram" />           </a>
          <a href="https://www.linkedin.com/in/manasacharya/" className='space-x-2 hover:scale-110'>
          <Icon className=" text-2xl lg:text-4xl" icon="bi:linkedin" />
          </a>
          <a href="https://github.com/manasacharyagit" className='space-x-2 hover:scale-110'>
          <Icon className=" text-2xl lg:text-4xl" icon="bi:github" />
          </a>
          <a href="https://medium.com/@manasacharya1702" className='space-x-2 hover:scale-110'>
          <Icon className=" text-2xl lg:text-4xl" icon="bi:medium" />         
          </a>
      </div>
      
    </div>
    <div class="justify-center m-8 font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-900/60 to-50% to-slate-800">
      <p className='inline-flex justify-center'>I am a  &#123;</p>
    <span class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
    <ul class="block animate-text-slide-4 text-center leading-tight [&_li]:block">
        <li>Web Developer</li>
        <li>Coder</li>
        <li>Blogger</li>
        <li>Learner</li>
        
        <li aria-hidden="true">Web Developer</li> 
    </ul>
   
    </span>
    &#125;
    </div>
    {/* _____________________________ */}
    <div className='p-4 mt-8'>
      <p className='text-4xl font-semibold'>
        I feel good when my<span className='text-slate-600 text-5xl'> <a target="_blank" href="https://github.com/manasacharyagit" className='ease-in-out duration-300'> code </a>  </span> works <br /> and have  <img src={coffee} width={60} height={60} className='inline-flex animate-bounce mt-4' alt="" /> when it doesn't <span className='text-5xl'>.</span> </p>
        <p className='text-4xl mt-6 font-semibold '>I create interactive things with code and also <span className='text-slate-600 text-5xl'> <a target="_blank" href="https://medium.com/@manasacharya1702">blog</a> </span>  about my learnings <span className='text-5xl'>.</span></p>
    </div>

    </div>
  )
}

export default Home