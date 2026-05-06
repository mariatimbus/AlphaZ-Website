import Navbar from './components/Navbar';
import TeamSection from './components/TeamSection';
import TeamGridSection from './components/TeamGridSection';
import MentorsSection from './components/MentorsSection';
import PeerMentorsSection from './components/PeerMentorsSection';
import ContactFooter from './components/ContactFooter';

const teamNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/team/' },
  { label: 'Press', href: '/press/' },
  { label: 'Sponsors', href: '/#sponsors' },
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
      <ContactFooter />
    </>
  );
}
