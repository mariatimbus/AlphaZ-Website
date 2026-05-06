import { useScrollAnimate } from '../hooks/useScrollAnimate';

const events = [
  {
    name: 'Ankara Regional',
    url: 'https://frc-events.firstinspires.org/2026/TUAK/awards',
    awards: ['Rookie All-Star Award Winner', '1st Pick Alliance 4'],
  },
  {
    name: 'Başkent Regional',
    url: 'https://frc-events.firstinspires.org/2026/TUAK2/awards',
    awards: ['Quality Award Winner', 'Captain Alliance 3'],
  },
  {
    name: 'FIRST Championship',
    url: 'https://frc-events.firstinspires.org/2026/DALY/awards',
    awards: ['Rookie All-Star Award Winner -', 'Daly Division'],
    championship: true,
  },
];

function Trophy() {
  return (
    <div className="w-[45px] h-[60px] sm:w-[55px] sm:h-[70px] lg:w-[70px] lg:h-[90px] relative shrink-0">
      <div className="trophy-handle trophy-handle-left" />
      <div className="trophy-handle trophy-handle-right" />
      <div className="trophy-body">
        <div className="trophy-star">★</div>
      </div>
      <div className="trophy-stem" />
      <div className="trophy-base" />
    </div>
  );
}

export default function AchievementsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimate();
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollAnimate();

  return (
    <section id="achievements" className="relative bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background image on right — desktop only */}
      <div
        className="absolute right-0 top-0 h-full w-1/2 bg-no-repeat bg-right bg-contain z-0 pointer-events-none max-lg:hidden"
        style={{ backgroundImage: "url('/image/bg%20section%203.png')" }}
      />

      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 pointer-events-none">
        <div className="pointer-events-auto">
          <h2
            ref={titleRef}
            className={`font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal text-left mb-8 sm:mb-12 lg:mb-16 ${
              titleVisible ? 'animate-slide-in-left' : 'opacity-0'
            }`}
          >
            <span className="text-white">Our</span>{' '}
            <span className="text-[#67fefe]">Achievements</span>
          </h2>

          <div
            ref={bodyRef}
            className={`flex gap-6 sm:gap-8 lg:gap-10 items-stretch max-lg:flex-col max-lg:items-center ${
              bodyVisible ? 'animate-fade-in-up delay-1' : 'opacity-0'
            }`}
          >
            {/* Left logo card */}
            <div className="flex-[0_0_160px] sm:flex-[0_0_200px] lg:flex-[0_0_260px] flex items-center justify-center bg-black/40 rounded-2xl p-4 sm:p-6 max-lg:w-[160px] sm:max-lg:w-[200px]">
              <img
                src="/image/logo%20rebuild.png"
                alt="Rebuilt"
                className="max-w-full h-auto block"
              />
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col justify-center gap-5 sm:gap-6 lg:gap-8 max-lg:w-full">
              {events.map((event) => (
                <a
                  key={event.name}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 sm:gap-6 lg:gap-8 py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-8 rounded-lg transition-transform duration-300 hover:-translate-y-1 group cursor-pointer ${
                    event.championship
                      ? 'bg-gradient-to-r from-[#3a8a9a] to-[#5aaaaa]'
                      : ''
                  }`}
                >
                  <div className="group-hover:[&_.trophy-body]:drop-shadow-[0_0_10px_rgba(103,254,254,0.5)]">
                    <Trophy />
                  </div>
                  <div className="flex flex-col">
                    <h3
                      className={`font-[Audiowide] text-base sm:text-lg lg:text-[22px] mb-1 sm:mb-2 ${
                        event.championship ? 'text-white' : 'text-[#67fefe]'
                      }`}
                    >
                      {event.name}
                    </h3>
                    <ul className="list-disc list-inside font-[Lato] text-white text-sm sm:text-base lg:text-[18px] leading-snug">
                      {event.awards.map((award) => (
                        <li key={award}>{award}</li>
                      ))}
                    </ul>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
