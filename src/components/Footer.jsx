import React from 'react';
import useInView from '../hooks/useInView';

// Clean footer tailored to Develop Coffee theme
const Footer = () => {
  const [mapRef, mapIn] = useInView({ threshold: 0.2 });

  return (
    <footer className="bg-main text-muted py-8">
      <div
          ref={mapRef}
          className={`mt-8 mx-auto max-w-xl self-end ${mapIn ? 'fade-in-up' : 'opacity-0'}`}
        >
          <iframe
            title="Develop Coffee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.1605657622524!2d115.26080765016789!3d-8.630299616976156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fa6ea58612f%3A0x33b5a44fe24ffbfc!2sDevelopcoffee_!5e0!3m2!1sid!2sid!4v1772373431543!5m2!1sid!2sid"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="300"
            style={{ border: 'solid #333', borderRadius: '8px' }}
            allowFullScreen="true"
            loading="lazy"
          ></iframe>
        </div> 
      <div className="max-w-7xl my-6 mx-auto px-6 flex flex-col text-center ">
        <p className="text-sm">© {new Date().getFullYear()} Develop Coffee. All rights reserved.</p>
        <ul className="mt-4 flex justify-center gap-6">
          <li>
            <a href="#" className="hover:text-accent transition" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/developcoffee_/" className="hover:text-accent transition" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.060 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.060-4.123.060v-.080c-2.643 0-2.987-.012-4.043-.060-.636-.049-1.363-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.056-.060-1.396-.060-4.043v-.080c0-2.715.012-3.056.060-4.123.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.024-.047 1.378-.060 3.808-.060z" />
                <path d="M12 7.378a4.622 4.622 0 100 9.244 4.622 4.622 0 000-9.244z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-accent transition" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.070 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
        </ul>
         
        {/* map block moved slightly later and given animation/align-end */}
        
        <div className="mt-6 text-xs text-muted">
          Designed by <a href="#" className="hover:text-accent transition">Dhika</a>. Built with React and Tailwind CSS.
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;