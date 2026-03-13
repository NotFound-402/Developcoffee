import React, { useState,useEffect } from 'react'
import useInView from '../hooks/useInView';

const Contact = ({innerRef}) => {
    const [formData, setFormData] = useState('')
    const [titleRef, titleIn] = useInView({ threshold: 0.2 });
    const [formRef, formIn] = useInView({ threshold: 0.2 });

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // placeholder for submit logic (e.g. open WhatsApp link)
        console.log('submit', formData);
        window.open(`https://wa.me/1234567890?text=${encodeURIComponent(formData)}`, '_blank');
    };

  return (
  <div
    className="min-h-screen bg-main text-main p-8"
    id="Contactd"
    ref={innerRef}
  >
        <h1 ref={titleRef} className={`text-4xl font-bold mb-6 text-center ${titleIn ? 'slide-in-left' : 'opacity-0'}`}>Contact Us</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`flex flex-col max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded ${formIn ? 'slide-in-right' : 'opacity-0'}`}
        >
            <label className="mb-2 font-bold" htmlFor="name">
              Name
            </label>
            <input
              className="mb-4 p-2 border border-gray-300 rounded focus:border-accent focus:ring-2 focus:ring-accent transition duration-200"
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setFormData(e.target.value)}
            />
            <label className="mb-2 font-bold" htmlFor="message">
              Message
            </label>
            <textarea
              className="mb-4 p-2 border border-gray-300 rounded focus:border-accent focus:ring-2 focus:ring-accent transition duration-200"
              id="message"
              name="message"
              rows="4"
              required
              onChange={(e) => setFormData(e.target.value)}
            ></textarea>
            <button
              className="bg-accent text-text-main p-2 rounded hover:bg-accent-dark transform hover:scale-105 transition-transform duration-200"
              type="submit"
            >
              Kirim Pesan Ke Whatsapp
            </button>
        </form>
    </div>
  )
}

export default Contact