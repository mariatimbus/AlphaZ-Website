import { useScrollAnimate } from '../hooks/useScrollAnimate';

const teamMembers = [
  { name: 'Timbus Maria', role: 'Non-Technical Department', image: './image/Team/Maria%20Timbus.png' },
  { name: 'Constantinescu Alice', role: 'Non-Technical Department', image: './image/Team/Alice%20Constantinescu.PNG' },
  { name: 'Ciornai Alexandru', role: 'Technical Department', image: './image/Team/Alexandru-Ciornai.png' },
  { name: 'Perja Ianis', role: 'Technical Department', image: './image/Team/Ianis-Perja.png' },
  { name: 'Diaconeasa Mihai', role: 'Technical Department', image: './image/Team/Mihai-Diaconeasa.png' },
  { name: 'Burtan Ovidiu', role: 'Technical Department', image: './image/Team/Ovidiu-Burtan.png' },
  { name: 'Zamfira Rares', role: 'Technical Department', image: './image/Team/Rares-Zamfira.png' },
  { name: 'Ghita Robert', role: 'Technical Department', image: './image/Team/Robert-Ghita.png' },
];

export default function TeamGridSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimate();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimate();

  return (
    <section id="team-grid" className="relative bg-black py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="relative z-[1] max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={titleRef}
          className={`text-center mb-8 sm:mb-10 lg:mb-14 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <h2 className="font-[Audiowide] text-2xl sm:text-3xl lg:text-5xl font-normal m-0 leading-tight">
            <span className="text-white">OUR </span>
            <span className="text-[#67fefe]">TEAM</span>
          </h2>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 ${
            gridVisible ? 'animate-fade-in-up delay-1' : 'opacity-0'
          }`}
        >
          {teamMembers.map((member, index) => (
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
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover block"
                    style={{
                      transform: member.name === 'Timbus Maria' || member.name === 'Zamfira Rares' ? 'scale(1.15)' : 'scale(1.4)',
                      objectPosition: member.name === 'Timbus Maria' || member.name === 'Zamfira Rares' ? 'center 30%' : 'center 15%',
                    }}
                  />
                </div>

                {/* Text inside card */}
                <div className="w-full pt-2 sm:pt-3 text-center">
                  <p className="font-[Audiowide] text-white text-xs sm:text-sm lg:text-base leading-tight">
                    {member.name}
                  </p>
                  <p className="font-[Lato] text-[#67fefe] text-[10px] sm:text-xs lg:text-sm leading-tight mt-0.5">
                    {member.role}
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
