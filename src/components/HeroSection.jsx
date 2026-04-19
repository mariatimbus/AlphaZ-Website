import { useRef } from 'react';
import HeroCanvas from './HeroCanvas';
import Navbar from './Navbar';

export default function HeroSection() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="home" className="relative w-full min-h-[100dvh] bg-[#0a0a0a] flex flex-col overflow-hidden">
      <HeroCanvas sectionRef={sectionRef} />

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,10,0.6) 100%)',
        }}
      />

      {/* Background image on right */}
      <div className="absolute right-0 inset-y-0 w-[45%] lg:w-1/2 overflow-hidden pointer-events-none z-[2]">
        <img
          src="./image/background_section1.png"
          className="h-full w-full object-cover object-right"
          alt=""
          aria-hidden="true"
        />
      </div>

      <Navbar />

      <div className="flex-1 flex items-center justify-center relative px-4 sm:px-6 lg:px-10">
        {/* Robot image — positioned higher */}
        <div className="absolute bottom-[15%] sm:bottom-[18%] left-1/2 -translate-x-1/2 lg:left-[30%] lg:translate-x-[-50%] w-full max-w-[1000px] flex items-center justify-center">
          <img
            src="./image/robot.png"
            alt="AlphaZ Robot"
            className="w-full max-w-[85vw] sm:max-w-[70vw] lg:max-w-[700px] h-auto relative z-[2] opacity-90 lg:opacity-100"
          />
        </div>

        {/* Hero text */}
        <div className="absolute bottom-8 sm:bottom-16 lg:bottom-20 left-4 sm:left-6 lg:left-[7%] z-[5]">
          <h1 className="font-[Audiowide] text-xl sm:text-3xl lg:text-5xl font-normal leading-tight">
            <span className="text-white block">Global performance.</span>
            <span className="text-[#4dd0e1] block">Romanian minds.</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
