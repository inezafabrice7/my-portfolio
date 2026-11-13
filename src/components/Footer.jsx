import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/profile'
import { getActiveSocialLinks } from '../data/socialLinks'
import SocialIcons from './SocialIcons'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const activeSocials = getActiveSocialLinks()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-[#0a090f]/70 py-10 sm:py-12">
      <div className="section-container">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.2fr_0.8fr_0.65fr] lg:gap-16">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-accent/30 bg-accent/10">
                <img src="/icon.svg" alt="" aria-hidden="true" className="h-full w-full object-cover" />
              </span>
              <span className="text-sm font-medium text-white">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              {profile.title} in {profile.location}, building practical software and staying curious about what&apos;s next.
            </p>
            {activeSocials.length > 0 && (
              <div className="mt-4 flex items-center gap-1">
                <SocialIcons links={activeSocials} size={16} subtle />
              </div>
            )}
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.17em] text-white/35">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-mono text-[10px] uppercase tracking-[0.17em] text-white/35">Keep in touch</h2>
            <a href="/ineza-fabrice-cv.txt" download className="mt-4 inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-accent-light">
              Download my CV <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            <a href="#contact" className="mt-3 block text-sm text-white/45 transition-colors hover:text-white">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/[0.07] pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {profile.name}</p>
          
        </div>
      </div>
    </footer>
  )
}
