import Connect from './ui/connect'
import VisualSlam from '@/app/ui/visual-slam'
import Music from '@/app/ui/music'
import WhoAmI from '@/app/ui/whoami'
import HealingPreview from './ui/healing-preview';

export default function Home() {
  
  return (
    <>
      <VisualSlam />
      
      <HealingPreview />

      <Music />

      <WhoAmI />

      <Connect />
    </>
  );
}
