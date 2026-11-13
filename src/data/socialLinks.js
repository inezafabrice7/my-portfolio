/**
 * SOCIAL LINKS CONFIGURATION
 * ==========================
 * Add your real social media URLs here.
 * Leave as empty string "" to hide that social link.
 * Do NOT invent URLs — only add real ones you own.
 */

export const socialLinks = {
  github: "https://github.com/DaFabro",        // e.g. "https://github.com/yourusername"     // e.g. "https://linkedin.com/in/yourusername"
  instagram: "https://instagram.com/ineza___fb",     // e.g. "https://instagram.com/yourusername"
  email: "inezafabrice85@gmail.com",         // e.g. "your.email@example.com"
  phone: "+250794671342",         // e.g. "+250781234567"
}

/**
 * Helper: returns only the social links that have real URLs.
 * Used throughout the site to avoid rendering empty links.
 */
export function getActiveSocialLinks() {
  const active = []
  if (socialLinks.github) active.push({ key: "github", url: socialLinks.github, label: "GitHub" })
  if (socialLinks.linkedin) active.push({ key: "linkedin", url: socialLinks.linkedin, label: "LinkedIn" })
  if (socialLinks.instagram) active.push({ key: "instagram", url: socialLinks.instagram, label: "Instagram" })
  if (socialLinks.email) active.push({ key: "email", url: `mailto:${socialLinks.email}`, label: "Email" })
  if (socialLinks.phone) active.push({ key: "phone", url: `tel:${socialLinks.phone}`, label: "Phone" })
  return active
}
