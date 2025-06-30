import { FaFacebook, FaGithub } from 'react-icons/fa';
import bgImg from '../../assets/images/banner-bg.png'
import myImg from '../../assets/images/img4.jpg'
import resumeFile from '../../../public/Resume.pdf'
import './Banner.css'



const Banner = () => {

  

    return (
   
      <div
  className="flex items-center justify-center  h-[600px] "
  style={{
    backgroundImage: `url(${bgImg})`,
  }}>
  {/* <div className="hero-overlay bg-opacity-30"></div> */}
  <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-10 '>

     {/* Left Section */}
    <div className=' text-center'>
    <span className="font-bold tracking-wide text-white py-2 px-2.5 text-lg mb-4 inline-block border border-white/50"
     style={{
      background: 'linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)',
  }}
    >
      Welcome to my Portfolio</span>
      <h2 className='text-5xl font-bold text-white'>HI, I AM MOSIUR</h2>
      <h1 className="text-3xl font-bold text-red-600 mb-4">Frontend Developer</h1>
      <p className="text-lg text-gray-400 mb-6">I make beautiful landing pages</p>
        <div className="flex justify-center items-center gap-4 mb-5">
             
              <a href="https://web.facebook.com/mdmosiur.rahman.9484941" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaFacebook />
              </a>
              <a href="https://github.com/mosiur73/" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaGithub />
                
              </a>
              
            </div>
      <button className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600">
      <a  
            href={resumeFile} 
            download="Mosiur_Resume.pdf" 
            className="px-6 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 inline-block" // Style as a button
          >
            Download Resume
          </a>
                       
                    </button>
                    
    </div>
     
      {/* Right Section */}
    <div className=' justify-center items-center lg:pl-20'>
      <img src={myImg} className='w-64 h-64 rounded-full border-2  animate-move'  alt="" />
    </div>
  </div>
</div>
    );
};

export default Banner;