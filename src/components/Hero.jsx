import React from 'react';
import useInView from '../hooks/useInView';

const Hero = ({innerRef}) => {
  const [textRef, textIn] = useInView({ threshold: 0.2 });
  const [cardRef, cardIn] = useInView({ threshold: 0.2 });


  return (
    <div className="min-h-screen bg-main text-main" id="Herod" ref={innerRef}>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className={textIn ? 'slide-in-left' : 'opacity-0'}>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase tracking-tight">
              <span className="text-highlight">Develop</span>
              <br />
              <span className="text-accent">Your</span>
              <br /> Connection
            </h1>
            <p className="p mt-6 text-white max-w-md">
              Start Your Day. Develop Your Ideas And Connection.
            </p>
          </div>
          <div className="relative">
            <div
              ref={cardRef}
              className={`${cardIn ? 'slide-in-right' : 'opacity-0'} bg-secondary border border-theme p-8 rounded-2xl shadow-2xl hover:scale-105 transform transition-transform duration-200`}
            >
              <p className="uppercase tracking-widest text-xs text-accent">
                Since 2022
              </p>
              <h3 className="mt-4 text-2xl font-bold uppercase">
                Developcoffee
              </h3>
              <p className="mt-3 text-sm text-muted">
                menawarkan suasana yang ramah dan nyaman, ideal untuk berbagai kebutuhan
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
