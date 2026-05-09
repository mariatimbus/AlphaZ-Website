import { useScrollAnimate } from './hooks/useScrollAnimate';
import Navbar from './components/Navbar';
import ContactFooter from './components/ContactFooter';

const pressItems = [
  {
    title: 'Premieră pentru România: Premiu la Campionatul Mondial FIRST Robotics Competition',
    source: 'Antena Pitești',
    href: 'https://www.facebook.com/share/v/18etNoNNk6/?mibextid=wwXIfr',
    image: '/image/antena%20pitesti.webp',
  },
  {
    title: 'Echipa AlphaZ premiată la Campionatul Mondial FIRST Robotics Competition',
    source: 'Ancheta Online',
    href: 'https://anchetaonline.ro/echipa-alphaz-premiata-la-campionatul-mondial-first-robotics-competition-315243/',
    image: '/image/ancheta.webp',
  },
  {
    title: 'AlphaZ a câștigat premiul Rookie All-Star la Campionatul Mondial FIRST Robotics Competition în divizia Daly',
    source: 'Instituțiile Statului',
    href: 'https://www.institutiilestatului.ro/actualitate/alphaz-a-castigat-premiul-rookie-all-star-la-campionatul-mondial-first-robotics-competition-in-divizia-daly/',
    image: '/image/institutii.jpeg',
  },
];

const pressNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/team/' },
  { label: 'Press', href: '/press/' },
  { label: 'Sponsors', href: '/#sponsors' },
  { label: 'Road to Worlds', href: 'https://donez.alphaz.ro', external: true },
];

function PressCard({ title, source, href, image }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-[320px] mx-auto rounded-[24px] overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(103,254,254,0.3)]"
      style={{ aspectRatio: '320/400' }}
    >
      <div className="relative w-full h-full flex flex-col">
        <div className="relative w-full h-[50%] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Bottom cyan area */}
        <div className="relative flex-1 bg-gradient-to-b from-[#0e8a8a] to-[#67fefe] flex flex-col items-center justify-center gap-2 sm:gap-3 p-4">
          <h3 className="font-[Audiowide] text-white text-sm sm:text-base text-center leading-snug line-clamp-3">
            {title}
          </h3>
          <p className="font-[Lato] text-white/80 text-xs sm:text-sm text-center">
            {source}
          </p>
          <span className="inline-block bg-white text-black font-[Lato] text-sm sm:text-base px-5 py-1.5 sm:px-6 sm:py-2 rounded-full no-underline mt-1">
            Read the article
          </span>
        </div>
      </div>
    </a>
  );
}

export default function PressPage() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimate();

  return (
    <div className="min-h-[100dvh] bg-black flex flex-col">
      {/* Background image on right — desktop only */}
      <div
        className="fixed right-0 top-0 h-full w-1/2 bg-no-repeat bg-right bg-contain z-0 pointer-events-none max-lg:hidden"
        style={{ backgroundImage: "url('/image/bg%20section%203.png')" }}
      />

      <div className="relative z-[1] flex flex-col min-h-[100dvh]">
        <Navbar items={pressNavItems} />

        <main className="flex-1 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-16">
          <div className="max-w-[1200px] mx-auto">
            <h2
              ref={titleRef}
              className={`font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal text-left mb-8 sm:mb-12 lg:mb-16 ${
                titleVisible ? 'animate-slide-in-left' : 'opacity-0'
              }`}
            >
              <span className="text-white">Press</span>{' '}
              <span className="text-[#67fefe]">Releases</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {pressItems.map((item) => (
                <PressCard key={item.title} title={item.title} source={item.source} href={item.href} image={item.image} />
              ))}
            </div>
          </div>
        </main>

        <ContactFooter />
      </div>
    </div>
  );
}
