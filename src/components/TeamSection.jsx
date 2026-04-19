import { useScrollAnimate } from '../hooks/useScrollAnimate';

export default function TeamSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimate();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimate();

  return (
    <section id="team" className="relative bg-black py-12 sm:py-16 lg:py-20 overflow-hidden min-h-[100dvh] flex flex-col">
      {/* Background image on left */}
      <div className="absolute left-0 inset-y-0 w-[45%] lg:w-[30%] overflow-hidden pointer-events-none z-0">
        <img
          src="./image/background_section1_flipped.png"
          className="h-full w-full object-cover object-left"
          alt=""
          aria-hidden="true"
        />
      </div>

      {/* Background image on right */}
      <div className="absolute right-0 inset-y-0 w-[45%] lg:w-1/2 overflow-hidden pointer-events-none z-[2]">
        <img
          src="./image/background_section1.png"
          className="h-full w-full object-cover object-right"
          alt=""
          aria-hidden="true"
        />
      </div>

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-center">
        <div
          ref={headingRef}
          className={`text-center mb-6 sm:mb-8 lg:mb-10 ${
            headingVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal m-0 leading-tight">
            <span className="text-white block">ABOUT OUR</span>
            <span className="text-[#67fefe] block">TEAM</span>
          </h2>
        </div>

        <div
          ref={textRef}
          className={`max-w-[650px] mx-auto text-center ${
            textVisible ? 'animate-fade-in-up delay-1' : 'opacity-0'
          }`}
        >
          <p className="font-[Lato] text-base sm:text-lg lg:text-xl text-[#ddd] leading-relaxed mb-4 sm:mb-6">
            After a dominant 2025 FTC season, where our alliance set 7 of the top 10 World Records and
            won the Maryland Tech Invitational (MTI), we knew it was time for the next step.
          </p>
          <p className="font-[Lato] text-base sm:text-lg lg:text-xl text-[#ddd] leading-relaxed">
            That is why AlphaZ was created: to bring industrial-scale engineering to Romania and
            prove that FRC-level excellence is possible here.
          </p>
        </div>
      </div>
    </section>
  );
}
