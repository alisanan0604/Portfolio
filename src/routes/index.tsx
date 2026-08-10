import { createFileRoute } from '@tanstack/react-router'
import { Loader } from '@/components/sections/Loader'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { CurrentlyBuilding } from '@/components/sections/CurrentlyBuilding'
import { Journey } from '@/components/sections/Journey'
import { GithubActivity } from '@/components/sections/GithubActivity'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { BackgroundFX } from '@/components/BackgroundFX'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'

export const Route = createFileRoute('/')({
  component: Portfolio,
})

function Portfolio() {
  return (
    <div className="site-shell relative min-h-screen">
      <Loader />
      <BackgroundFX />
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CurrentlyBuilding />
        <Journey />
        <GithubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
