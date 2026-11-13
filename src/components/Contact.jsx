import { useEffect, useState } from 'react'
import { ArrowUpRight, CheckCircle, Link as LinkIcon, Mail, Phone, Send } from 'lucide-react'
import { getActiveSocialLinks, socialLinks } from '../data/socialLinks'
import { usefulLinks } from '../data/usefulLinks'
import SocialIcons from './SocialIcons'
import Reveal from './Reveal'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const activeSocials = getActiveSocialLinks()

  useEffect(() => {
    if (!statusMessage) return undefined
    const timer = window.setTimeout(() => setStatusMessage(''), 8000)
    return () => window.clearTimeout(timer)
  }, [statusMessage])

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) nextErrors.message = 'Message is required'
    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatusMessage('')
      return
    }

    if (!socialLinks.email) {
      setErrors({ form: 'Email contact is not configured. Please use another contact link.' })
      return
    }

    setErrors({})
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`
    setStatusMessage('Your email app should open with a draft. Review and send it there.')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    if (errors[name] || errors.form) {
      setErrors((previous) => ({ ...previous, [name]: '', form: '' }))
    }
    setStatusMessage('')
  }

  const fieldProps = (name) => ({
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-rule absolute inset-x-0 top-0" aria-hidden="true" />
      <div className="contact-glow pointer-events-none absolute -right-36 top-12 h-[420px] w-[420px] rounded-full bg-accent/[0.08] blur-[120px]" aria-hidden="true" />
      <div className="section-container relative">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <Reveal>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Have something in mind?</h2>
            <p className="section-copy">
              Have an idea, project, opportunity, or just want to connect? I&apos;m open to thoughtful conversations and collaboration.
            </p>

            <div className="mt-8 space-y-3">
              {socialLinks.email && (
                <a href={`mailto:${socialLinks.email}`} className="contact-link">
                  <span className="contact-icon"><Mail size={17} aria-hidden="true" /></span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Email</span>
                    <span className="mt-1 block break-all text-sm text-white/80">{socialLinks.email}</span>
                  </span>
                  <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/35" aria-hidden="true" />
                </a>
              )}
              {socialLinks.phone && (
                <a href={`tel:${socialLinks.phone}`} className="contact-link">
                  <span className="contact-icon"><Phone size={17} aria-hidden="true" /></span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Phone</span>
                    <span className="mt-1 block text-sm text-white/80">{socialLinks.phone}</span>
                  </span>
                  <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/35" aria-hidden="true" />
                </a>
              )}
              {usefulLinks.map((link) => (
                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-icon"><LinkIcon size={17} aria-hidden="true" /></span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">{link.title}</span>
                    <span className="mt-1 block text-sm text-white/80">{link.description}</span>
                  </span>
                  <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/35" aria-hidden="true" />
                </a>
              ))}
            </div>

            {activeSocials.length > 0 && (
              <div className="mt-7">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Elsewhere</p>
                <div className="flex items-center gap-1">
                  <SocialIcons links={activeSocials} size={16} subtle />
                </div>
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 sm:p-8">
            <div className="mb-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-light/75">Send a note</p>
              <h3 className="mt-2 text-xl font-medium text-white">Tell me what you&apos;re working on.</h3>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-xs text-white/55">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`input-field ${errors.name ? 'border-red-400/60' : ''}`}
                  autoComplete="name"
                  {...fieldProps('name')}
                />
                {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-300" role="alert">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs text-white/55">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`input-field ${errors.email ? 'border-red-400/60' : ''}`}
                  autoComplete="email"
                  {...fieldProps('email')}
                />
                {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-300" role="alert">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs text-white/55">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className={`input-field resize-y ${errors.message ? 'border-red-400/60' : ''}`}
                  {...fieldProps('message')}
                />
                {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-300" role="alert">{errors.message}</p>}
              </div>

              {errors.form && <p className="text-sm text-red-300" role="alert">{errors.form}</p>}
              <button type="submit" className="btn-primary min-h-12 w-full" data-cursor="active">
                {statusMessage ? <><CheckCircle size={17} aria-hidden="true" /> Draft requested</> : <><Send size={17} aria-hidden="true" /> Open email draft</>}
              </button>
              <p className="text-center text-xs leading-5 text-white/35" aria-live="polite">
                {statusMessage || `This opens your email app to contact ${socialLinks.email}. Review and send the draft there.`}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
