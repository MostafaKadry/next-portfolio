import HeroSection from "@/components/sections/HeroSection"
import TechStack from "@/components/sections/TechStack"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContactSection from "@/components/sections/ContactSection"

export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <section className="relative z-10">
        <HeroSection />
      </section>
      <section className="relative z-20 -mt-24 pb-16">
        <TechStack />
      </section>
      <section className="relative z-20 pb-16">
        <ProjectsSection />
      </section>
      <section className="relative z-20 pb-16">
        <ContactSection />
      </section>
    </main>
  )
}
