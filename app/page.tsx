import { ContactFooter } from '@/components/contact-footer'
import { Dashboard } from '@/components/dashboard'
import { HarmonySection } from '@/components/harmony-section'
import { Hero } from '@/components/hero'
import { Insights } from '@/components/insights'
import { LumoraSection } from '@/components/lumora-section'
import { Overview } from '@/components/overview'
import { Process } from '@/components/process'
import { SiteHeader } from '@/components/site-header'
import { SqlSection } from '@/components/sql-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Process />
        <Dashboard />
        <SqlSection />
        <Insights />
        <LumoraSection />
        <HarmonySection />
      </main>
      <ContactFooter />
    </>
  )
}
