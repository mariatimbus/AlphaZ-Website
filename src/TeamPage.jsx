import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';
import TeamGridSection from './components/TeamGridSection';
import MentorsSection from './components/MentorsSection';
import PeerMentorsSection from './components/PeerMentorsSection';

const teamNavItems = [
  { label: 'Home', href: 'index.html' },
  { label: 'About', href: 'index.html#about' },
  { label: 'Team', href: 'team.html' },
  { label: 'Sponsors', href: 'index.html#sponsors' },
  { label: 'Road to Worlds', href: 'https://donez.alphaz.ro', external: true },
];

export default function TeamPage() {
  return (
    <>
      <Navbar items={teamNavItems} />
      <TeamSection />
      <TeamGridSection />
      <PeerMentorsSection />
      <MentorsSection />
    </>
  );
}
