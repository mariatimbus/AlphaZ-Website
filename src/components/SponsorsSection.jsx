import { useScrollAnimate } from '../hooks/useScrollAnimate';

export default function SponsorsSection() {
  const { ref, isVisible } = useScrollAnimate();

  return (
    <section id="sponsors" className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}
      >
        <h2 className="font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal text-[#67fefe] mb-8 sm:mb-12 lg:mb-16 text-left">
          SPONSORS
        </h2>

        <img
          src="/image/sponsors%20logo.png"
          alt="Our Sponsors"
          loading="lazy"
          decoding="async"
          className="w-full max-w-[1000px] h-auto block mx-auto transition-all duration-400 hover:scale-[1.02] hover:brightness-110"
        />
      </div>
    </section>
  );
}
