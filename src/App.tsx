
import { AtmosphereSection } from './components/AtmosphereSection'
import { CouponSection } from './components/CouponSection'
import { ExperienceSection } from './components/ExperienceSection'
import {NavHeader} from './components/Header/NavHeader'
import { JoinSection } from './components/JoinSection'
import { MapSection } from './components/MapSection'
import { RecoverySection } from './components/RecoverySection'
import { TurfSection } from './components/TurfSection'
import { VideoSection } from './components/VideoSection'
import { WhySection } from './components/WhySection'

function App() {

  return (
    <>
      <NavHeader />
      <VideoSection />
      <WhySection />
      <CouponSection />
      <ExperienceSection />
      <RecoverySection />
      <TurfSection />
      <AtmosphereSection />
      <JoinSection />
      <MapSection />
    </>
  )
}

export default App
