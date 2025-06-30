import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Education = () => {
    return (
        
            <section className="bg-gray-100 pb-6 pt-14" id="about">
           <div >
           <h2 className="text-4xl text-center font-bold text-gray-800 mb-3">Education</h2>
           <div className='divider '></div>
           </div>
            <Slide direction="right" cascade damping={0.1} triggerOnce>
           <div className="max-w-screen-sm mx-auto bg-white rounded-lg shadow-lg p-8 my-6"> {/* Card styling */}
      <div className="flex flex-col items-center">
        <div className="mb-6">
          <div className="flex items-center space-x-4"> 
            <div className="text-lg font-semibold text-gray-700">2020-2024</div>
            <div className="text-lg text-gray-600">Diploma in Engineering</div>
          </div>
          <div className="w-24 h-1 bg-blue-500 mt-2 rounded-full"></div> 
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Bangladesh Polytechnic Institute</h2>
          <p className="text-center text-gray-600 mb-4">Hetem Kha, Rajshahi</p>
          <p className="text-gray-700 leading-relaxed"> 
            I completed my Diploma in Engineering in Computer Technology from Bangladesh Polytechnic Institute. Session: 2020-2021.
          </p>
        </div>
      </div>
    </div>
      </Slide>
    </section> 
     
    );
};

export default Education;