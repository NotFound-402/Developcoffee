import React from 'react';
import useInView from '../hooks/useInView';

const About = ({innerRef}) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="min-h-screen bg-main text-main p-8" id="Aboutd" ref={innerRef}>
      <div ref={ref} className={inView ? 'slide-in-left' : 'opacity-0'}>
        <h1 className="text-4xl font-bold mb-6 text-center">About</h1>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          <span className="text-accent font-extrabold">Develop Coffee</span> adalah sebuah coffee shop modern dan nyaman yang berlokasi di Batubulan, Gianyar — dekat Denpasar, Bali. Tempat ini cocok untuk siapa saja yang ingin menikmati secangkir kopi berkualitas dalam suasana santai: bekerja, berkumpul bersama teman, atau sekadar beristirahat setelah jalan-jalan.
        </p>
        <p className="mt-4 text-muted max-w-xl leading-relaxed">
          Kami menghadirkan kombinasi kopi yang nikmat, ambience hangat, dan harga bersahabat. Cocok untuk pelajar, pekerja remote, anak muda, maupun wisatawan lokal. Datang dan rasakan pengalaman kopi yang autentik.
        </p>

      </div>
    </div>
  )
}

export default About