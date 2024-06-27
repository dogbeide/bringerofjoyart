import Connect from './ui/connect'
import VisualSlam from '@/app/ui/visual-slam'
import Music from '@/app/ui/music'
import WhoAmI from '@/app/ui/whoami'
import Healing from "./ui/healing";

export default function Home() {
  
  return (
    <>
      <VisualSlam />
      
      <Healing />

      <Music />

      <WhoAmI />

      <Connect />
    </>
  );
}
