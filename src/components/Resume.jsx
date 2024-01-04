// import React from 'react';
// import resumepdf from '../resources/MMAresume.pdf';


// function Resumepage() {
 
//  return (
//   <div>
   
//    <div id='resume' className='h-full overflow-hidden'>
//        <iframe className='p-6 w-full h-screen over' src={resumepdf}  frameborder="0"></iframe>
//    </div>
//    </div>
//  );
// }

// export default Resumepage;

import React from 'react';
import resumepdf from '../resources/MMAresume.pdf';
// import { useNavigate } from "react-router-dom";

function Resumepage() {
  // const navigate = useNavigate();
 return (
  <div className="p-5">
    {/* <button onClick={() => navigate('/')} type="button" className="btn btn-info introfont m-3">Go back</button> */}
  
    <div id='resume' className="">
       <iframe className='p-2 w-full h-screen sm:h-screen' src={resumepdf} ></iframe>
    </div>
  </div>
 );
}

export default Resumepage;
