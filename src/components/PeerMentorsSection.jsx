import { useScrollAnimate } from '../hooks/useScrollAnimate';

const peerMentors = [
  { name: 'Timbus Maria', role: 'Pr & Marketing', image: './image/Team/Maria%20Timbus.png' },
  { name: 'Timbus Maria', role: 'Pr & Marketing', image: './image/image.jpg' },
  { name: 'Timbus Maria', role: 'Pr & Marketing', image: './image/image.jpg' },
  { name: 'Timbus Maria', role: 'Pr & Marketing', image: './image/image.jpg' },
];

export default function PeerMentorsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimate();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimate();

  return (
    <section id="peer-mentors" className="relative bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-10 lg:mb-14 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal m-0 leading-tight">
            <span className="text-white">OUR </span>
            <span className="text-[#67fefe]">PEER MENTORS</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 ${
            gridVisible ? 'animate-fade-in-up delay-1' : 'opacity-0'
          }`}
        >
          {peerMentors.map((mentor, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
            >
              {/* Card with background */}
              <div
                className="w-full rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] overflow-hidden flex flex-col items-center p-2.5 sm:p-3 lg:p-4"
                style={{
                  backgroundImage: "url('./image/card.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  aspectRatio: '883 / 1220',
                }}
              >
                {/* Photo */}
                <div className="w-full flex-1 overflow-hidden rounded-xl sm:rounded-2xl">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Text inside card */}
                <div className="w-full pt-2 sm:pt-3 text-center">
                  <p className="font-[Audiowide] text-white text-xs sm:text-sm lg:text-base leading-tight">
                    {mentor.name}
                  </p>
                  <p className="font-[Lato] text-[#67fefe] text-[10px] sm:text-xs lg:text-sm leading-tight mt-0.5">
                    {mentor.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
