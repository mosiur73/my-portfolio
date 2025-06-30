import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { Slide } from 'react-awesome-reveal';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1ln71ai', 'template_0bt8os92', form.current, {
        publicKey: 'rEEWJVuNRCGFl9Zbs',
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          toast.success('Message sent successfully! 🎉');
          form.current.reset(); // This resets the form
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message. Please try again.');
        },
      );
  };
  return (
    <div className='bg-gray-100  flex flex-col items-center justify-center py-14 px-4 '>
      <h1 className='text-4xl text-center font-bold text-black '>Contact me</h1>
      <div className='divider'></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 bg-gray-100 gap-16 mx-auto items-center justify-center">
         <Slide direction="left" cascade damping={0.1} triggerOnce>
        <form ref={form} onSubmit={sendEmail} className=" p-8 bg-white rounded-lg shadow-lg">
          <div className='flex gap-4'>
            <div className="">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name='user_name'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name='user_email'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Your email"
              />
            </div>
          </div>



          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name='message'
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            value="send"
            className="w-full py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Submit
          </button>
        </form>
        </Slide>
          <Slide direction="left" distance="300px" damping={0.1}>
        <div className='w-96 h-[350px] rounded-2xl bg-slate-200 flex justify-center items-center '>
          <div className="flex flex-col justify-center my-28 text-center text-black"> 
            <h2 className="text-2xl font-bold mb-2">Location: Nachol, Chapai Nawabganj</h2> 
            <h2 className="text-xl mb-2">Email: mosiurrahman.cmt173@gmail.com </h2> 
            <h2 className="text-xl">Contact: +8801782442249</h2> 
          </div>
        </div>
        </Slide>
      </div>
    </div>
  );
};

export default Contact;