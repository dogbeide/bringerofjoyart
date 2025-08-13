import Connect from './ui/connect'
import Books from '@/app/ui/books'
import Music from '@/app/ui/music'
import WhoAmI from '@/app/ui/whoami'
import HealingPreview from './ui/healing-preview';

export default function Home() {
  
  return (
    <>
      <Books />

      <Music />

      {/* <HealingPreview /> */}

      <WhoAmI />

      <Connect />
    </>
  );
}
