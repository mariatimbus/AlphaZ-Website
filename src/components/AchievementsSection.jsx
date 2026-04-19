import { useScrollAnimate } from '../hooks/useScrollAnimate';

const achievements = [
  { title: 'Rookie All-Star', subtitle: 'Award Winner', highlight: '' },
  { title: '1st Pick', subtitle: 'Alliance 4', highlight: 'Ankara Regional' },
  { title: 'Quality', subtitle: 'Award Winner', highlight: '' },
  { title: 'Captain', subtitle: 'Alliance 3', highlight: 'Başkent Regional' },
];

function Trophy() {
  return (
    <div className="w-[45px] h-[60px] sm:w-[55px] sm:h-[70px] lg:w-[70px] lg:h-[90px] mb-2 sm:mb-3 lg:mb-5 relative">
      <div className="trophy-handle trophy-handle-left" />
      <div className="trophy-handle trophy-handle-right" />
      <div className="trophy-body" />
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
      {/* Background image on right */}
      <div
        className="absolute right-0 top-0 h-full w-[40%] lg:w-1/2 bg-no-repeat bg-right bg-contain z-0 pointer-events-none"
        style={{ backgroundImage: "url('./image/bg%20section%203.png')" }}
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
            <div className="flex-[0_0_160px] sm:flex-[0_0_200px] lg:flex-[0_0_260px] flex items-center justify-center bg-black/40 border-2 border-white/20 rounded-2xl p-4 sm:p-6 max-lg:w-[160px] sm:max-lg:w-[200px]">
              <img
                src="./image/logo%20rebuild.png"
                alt="Rebuilt"
                className="max-w-full h-auto block"
              />
            </div>

            {/* Right content */}
            <div className="flex-1 flex flex-col justify-between gap-5 sm:gap-6 lg:gap-8 max-lg:w-full">
              {/* 4 achievements in a row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {achievements.map((ach) => (
                  <div
                    key={ach.title + ach.subtitle}
                    className="text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-1.5 group"
                  >
                    <div className="group-hover:[&_.trophy-body]:drop-shadow-[0_0_10px_rgba(103,254,254,0.5)]">
                      <Trophy />
                    </div>
                    <p className="font-[Lato] text-white text-sm sm:text-base lg:text-[22px] leading-snug m-0 mb-1 sm:mb-2">
                      {ach.title}
                      <br />
                      {ach.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              {/* Regional labels spanning pairs of trophies */}
              <div className="hidden lg:grid grid-cols-4 gap-8 -mt-4">
                <span className="col-span-2 text-center font-[Audiowide] text-[#67fefe] text-[22px]">
                  Ankara Regional
                </span>
                <span className="col-span-2 text-center font-[Audiowide] text-[#67fefe] text-[22px]">
                  Başkent Regional
                </span>
              </div>

              {/* Mobile labels */}
              <div className="lg:hidden flex justify-around">
                <span className="font-[Audiowide] text-[#67fefe] text-sm sm:text-base text-center">
                  Ankara Regional
                </span>
                <span className="font-[Audiowide] text-[#67fefe] text-sm sm:text-base text-center">
                  Başkent Regional
                </span>
              </div>

              <div className="bg-gradient-to-r from-[#3a8a9a] to-[#5aaaaa] py-3 sm:py-4 lg:py-5 px-4 sm:px-6 lg:px-10 text-center font-[Audiowide] text-white text-sm sm:text-base lg:text-[22px] rounded-lg w-full">
                FIRST Championship Qualification in our rookie season
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
