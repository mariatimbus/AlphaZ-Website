import { useScrollAnimate } from '../hooks/useScrollAnimate';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimate();

  return (
    <section
      className="relative w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[45vh] max-h-[500px] bg-no-repeat bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: "url('./image/image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <div
        ref={ref}
        className={`relative z-[2] text-center px-4 sm:px-6 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <h2 className="font-[Audiowide] text-lg sm:text-2xl md:text-4xl lg:text-5xl font-normal leading-snug mb-4 sm:mb-6">
          <span className="text-white block">Help AlphaZ reach the</span>
          <span className="text-[#67fefe] block">FRC World Championship</span>
        </h2>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
          <a
            href="./contract/Contract%20sponsorizare%20semnat.pdf"
            download
            className="font-[Audiowide] text-xs sm:text-sm md:text-base text-black bg-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#67fefe] hover:scale-105 hover:shadow-[0_0_20px_rgba(103,254,254,0.4)]"
          >
            SPONSOR US
          </a>
          <a
            href="https://donez.alphaz.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[Audiowide] text-xs sm:text-sm md:text-base text-black bg-white px-5 py-2.5 sm:px-8 sm:py-3 rounded-full no-underline transition-all duration-300 hover:bg-[#67fefe] hover:scale-105 hover:shadow-[0_0_20px_rgba(103,254,254,0.4)]"
          >
            DONATE TO US
          </a>
        </div>
      </div>
    </section>
  );
}
