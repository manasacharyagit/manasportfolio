import React from 'react'
import hookblogimg from '../resources/hookblogimg.webp'

import { Icon } from '@iconify/react';
const blogs = [
  {
    image: hookblogimg,
    title:"React Hooks",
    desc: "Hooks are features in React which allows us to use react features without..." ,
    directlink: "https://medium.com/stackademic/react-hooks-and-usestate-a-note-from-a-learner-0a1921d1b19d",
  },
  
]

const Blog = () => {
  
  return (
    <div className=''>
    <div className='flex items-center justify-center'>
      <div className='text-7xl font-bold m-6'>Blogs</div>
    </div>

    <div className='flex flex-row space-x-8 p-4 m-4 justify-center items-center'>
      {blogs.map((blog)=>(

       <div className="w-[300px] bg-white rounded-md shadow-2xl border-slate-200 border-4">
      <img
        src={blog.image}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{blog.title}</h1>
        <p className="mt-3 text-md text-gray-800">
          {blog.desc} <span className='text-gray-600'>click the link below to read more</span>
        </p>
      
        <a target="_blank" href={blog.directlink} className='inline-flex m-2'>
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
export default Blog