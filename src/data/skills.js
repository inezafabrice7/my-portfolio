/**
 * Keep each technology's status honest; these are areas of practice, not ratings.
 */
export const skillCategories = [
  {
    title: 'Frontend development',
    icon: 'monitor',
    skills: [
      { name: 'HTML', status: 'building' },
      { name: 'CSS', status: 'building' },
      { name: 'JavaScript', status: 'building' },
      { name: 'React', status: 'building' },
      { name: 'Tailwind CSS', status: 'building' },
    ],
  },
  {
    title: 'Backend development',
    icon: 'server',
    skills: [
      { name: 'Node.js', status: 'building' },
      { name: 'Express.js', status: 'building' },
      { name: 'REST APIs', status: 'building' },
    ],
  },
  {
    title: 'Programming languages',
    icon: 'code',
    skills: [
      { name: 'JavaScript', status: 'building' },
      { name: 'Python', status: 'learning' },
      { name: 'PHP', status: 'learning' },
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    skills: [{ name: 'MongoDB', status: 'building' }],
  },
  {
    title: 'Developer tools',
    icon: 'wrench',
    skills: [
      { name: 'Git', status: 'building' },
      { name: 'GitHub', status: 'building' },
      { name: 'VS Code', status: 'building' },
      { name: 'Postman', status: 'building' },
      { name: 'Linux', status: 'learning' },
    ],
  },
  {
    title: 'Cloud & infrastructure',
    icon: 'cloud',
    skills: [
      { name: 'Cloud computing', status: 'exploring' },
      { name: 'DevOps', status: 'exploring' },
      { name: 'Linux', status: 'learning' },
    ],
  },
  {
    title: 'Artificial intelligence',
    icon: 'sparkles',
    skills: [
      { name: 'Artificial intelligence', status: 'exploring' },
      { name: 'Machine learning', status: 'exploring' },
    ],
  },
]

export const statusLabels = {
  building: 'Building with',
  learning: 'Learning',
  exploring: 'Exploring',
}
