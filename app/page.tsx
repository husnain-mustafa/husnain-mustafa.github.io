import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { Experience } from './components/Experience';
import { SkillsStack } from './components/SkillsStack';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Experience />
      <SkillsStack />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
