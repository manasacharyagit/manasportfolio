import React from 'react'
import { Icon } from '@iconify/react';
import mypic from '../resources/profile-pic2.png'
export function Footer() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white shadow-2xl py-8 rounded-sm mt-4">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
               <img src={mypic}
               className="h-14 w-14 rounded-full"
                alt="" />
                {/* <span className="ml-4 text-lg font-bold">MMA</span> */}
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center ">
              <li className="p-5">
                <a className="font-medium text-white-600 hover:text-gray-400" href="#">
                  Projects
                </a>
              </li>
              <li className="p-5">
                <a className="font-medium text-white-600 hover:text-gray-400" href="#">
                  My Blogs
                </a>
              </li>
              {/* <li className="p-5">
                <a className="font-medium text-white-600 hover:text-gray-400" href="#">
                  Return Policy
                </a>
              </li> */}
              <li className="p-5">
                <a className="font-medium text-white-600 hover:text-gray-400" href="#">
                  manasacharya1702@gmail.com
                  
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap p-6">
              <div className="w-auto p-1.5 space-x-6">
                <a target="_blank" href="https://www.instagram.com/manasacharya_17/">
                <Icon className=" text-lg" icon="bi:instagram" />               
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a target="_blank" href="https://github.com/manasacharyagit">
                <Icon className=" text-lg" icon="bi:github" />               
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a target="_blank" href="https://www.linkedin.com/in/manasacharya/">
                <Icon className=" text-lg " icon="bi:linkedin" />
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a target="_blank" href="https://medium.com/@manasacharya1702">
                <Icon className=" text-lg" icon="bi:medium" />  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
