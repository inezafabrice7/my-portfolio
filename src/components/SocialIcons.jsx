import { Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  email: Mail,
  phone: Phone,
}

export default function SocialIcons({ links, size = 18, subtle = false }) {
  if (!links || links.length === 0) return null

  return (
    <>
      {links.map((link) => {
        const Icon = iconMap[link.key]
        if (!Icon) return null
        return (
          <a
            key={link.key}
            href={link.url}
            target={link.key === 'email' || link.key === 'phone' ? undefined : '_blank'}
            rel={link.key === 'email' || link.key === 'phone' ? undefined : 'noopener noreferrer'}
            aria-label={link.label}
            title={link.label}
            data-cursor="active"
            className={`inline-flex items-center justify-center rounded-full transition-all duration-300 ${
              subtle
                ? 'h-9 w-9 text-muted hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                : 'h-10 w-10 text-muted hover:text-white bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-accent/10'
            }`}
          >
            <Icon size={size} />
          </a>
        )
      })}
    </>
  )
}
