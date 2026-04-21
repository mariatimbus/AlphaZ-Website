import { useScrollAnimate } from '../hooks/useScrollAnimate';

export default function AboutSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimate();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimate();

  return (
    <section id="about" className="relative bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background image on left — desktop only */}
      <div
        className="absolute left-0 inset-y-0 w-[30%] bg-no-repeat bg-left bg-cover z-0 pointer-events-none max-lg:hidden"
        style={{
          backgroundImage: "url('/image/background_section1.png')",
          transform: 'scaleX(-1)',
        }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={headingRef}
          className={`flex items-center gap-3 mb-4 sm:mb-6 ${
            headingVisible ? 'animate-slide-in-left' : 'opacity-0'
          }`}
        >
          <h2 className="font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal m-0">
            <span className="text-white">About</span>{' '}
            <span className="text-[#67fefe]">Us</span>
          </h2>
        </div>

        <p
          ref={textRef}
          className={`font-[Lato] text-base sm:text-lg lg:text-xl text-[#ddd] leading-relaxed max-w-[1048px] mb-8 sm:mb-12 lg:mb-14 ${
            textVisible ? 'animate-fade-in-up delay-1' : 'opacity-0'
          }`}
        >
          AlphaZ is a FIRST Robotics Competition team from Romania, bringing together students driven by
          a passion for engineering, innovation, and high-impact problem solving, competing at the highest
          international level in large-scale robotics.
        </p>

        <div
          ref={imagesRef}
          className={`flex items-end justify-start gap-4 sm:gap-6 max-sm:flex-col max-sm:items-center ${
            imagesVisible ? 'animate-fade-in-up delay-2' : 'opacity-0'
          }`}
        >
          <div className="rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(103,254,254,0.15)] w-full sm:w-[280px] sm:h-[320px] lg:w-[320px] lg:h-[380px]">
            <img
              src="/image/image%201.jpeg"
              alt="Team image 1"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(103,254,254,0.15)] w-full sm:w-[320px] sm:h-[400px] lg:w-[360px] lg:h-[480px]">
            <img
              src="/image/image%202.jpeg"
              alt="Team image 2"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="rounded-2xl overflow-hidden flex-shrink-0 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(103,254,254,0.15)] w-full sm:w-[280px] sm:h-[320px] lg:w-[320px] lg:h-[380px]">
            <img
              src="/image/image%203.jpeg"
              alt="Team image 3"
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
