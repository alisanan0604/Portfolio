export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend & Database'
  | 'Tools'

export interface Skill {
  name: string
  category: SkillCategory
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Radix UI', category: 'Frontend' },

  // Backend & Database
  { name: 'Supabase', category: 'Backend & Database' },
  { name: 'REST APIs', category: 'Backend & Database' },
  { name: 'Authentication', category: 'Backend & Database' },
  { name: 'Database Integration', category: 'Backend & Database' },
  { name: 'Render', category: 'Backend & Database' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Visual Studio Code', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Antigravity', category: 'Tools' },
]

export const skillCategories: SkillCategory[] = [
  'Languages',
  'Frontend',
  'Backend & Database',
  'Tools',
]
