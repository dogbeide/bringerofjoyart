import Connect from './ui/connect'
import Books from '@/app/ui/books'
import Music from '@/app/ui/music'
import WhoAmI from '@/app/ui/whoami'
import Art from '@/app/ui/art'
import HealingPreview from './ui/healing-preview';

export default function Home() {
  
  return (
    <>
      <Books />

      <Music />

      <Art />

      {/* <HealingPreview /> */}

      <WhoAmI />

      <Connect />
    </>
  );
}
