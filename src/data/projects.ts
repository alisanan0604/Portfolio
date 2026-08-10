export type ProjectStatus =
  | 'Live'
  | 'Active'
  | 'In Development'
  | 'Testing'
  | 'Improving'
  | 'Concept'
  | 'Planned'

export interface Project {
  id: string
  index: string
  name: string
  description: string
  features?: string[]
  tech: string[]
  status: ProjectStatus
  liveUrl?: string
  githubUrl?: string
  /** Only completed, real projects are featured on the homepage grid. */
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 'ai-voice-assistant',
    index: '01',
    name: 'AI Voice Assistant',
    description:
      'An intelligent voice-based AI assistant designed to handle natural interactions, contextual conversations and AI-powered tasks.',
    tech: ['Python', 'AI APIs', 'Voice Technology'],
    status: 'Improving',
    featured: true,
  },
  {
    id: 'cab-booking-platform',
    index: '02',
    name: 'Cab Booking & Fleet Management Platform',
    description:
      'A modern platform designed to manage cab bookings, customer information, travel details, vehicle allocation and administrative operations.',
    features: [
      'Booking management',
      'Customer records',
      'Vehicle management',
      'Search',
      'Edit',
      'Delete',
      'Data management',
    ],
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    status: 'Active',
    liveUrl: 'https://innovatravels.in',
    featured: true,
  },
  {
    id: 'travel-taxi-management(admin Panel)',
    index: '03',
    name: 'Travel & Taxi Management System',
    description:
      'A digital management system for organizing customer travel information, routes, booking dates, vehicles and payment records.',
    tech: ['TypeScript', 'React', 'Supabase'],
    status: 'Active',
    featured: true,
  },
  {
    id: 'personal-portfolio',
    index: '04',
    name: 'Personal Developer Portfolio',
    description:
      'A futuristic developer portfolio built to showcase projects, technical skills and development work through a highly interactive user experience.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    status: 'Active',
    featured: true,
  },

  // Future placeholders — not shown as completed, only as concept/planned.
  {
    id: 'ai-rag-chat',
    index: '05',
    name: 'AI PDF Chat / RAG Application',
    description:
      'A retrieval-augmented application for conversing with documents using contextual AI search.',
    tech: ['TypeScript', 'AI APIs', 'Vector Search'],
    status: 'Concept',
    featured: false,
  },
  {
    id: 'ai-resume-analyzer',
    index: '06',
    name: 'AI Resume Analyzer',
    description:
      'A tool that reviews resumes and provides structured, AI-driven improvement feedback.',
    tech: ['Python', 'AI APIs'],
    status: 'Concept',
    featured: false,
  },
  {
    id: 'realtime-chat',
    index: '07',
    name: 'Real-Time Chat Application',
    description:
      'A real-time messaging system built around live sockets and presence.',
    tech: ['TypeScript', 'React', 'Realtime APIs'],
    status: 'Planned',
    featured: false,
  },
  {
    id: 'expense-tracker',
    index: '08',
    name: 'Full-Stack Expense Tracker',
    description:
      'A personal finance tracker with categorized spending and visual reporting.',
    tech: ['Next.js', 'Supabase'],
    status: 'Planned',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const upcomingProjects = projects.filter((p) => !p.featured)
