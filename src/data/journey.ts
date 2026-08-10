export interface JourneyItem {
  year: string
  title: string
  org: string
  detail: string
}

export const journey: JourneyItem[] = [
  {
    year: 'In Progress',
    title: 'Bachelor of Computer Applications (BCA)',
    org: 'MAKAUT',
    detail: 'Computer Science · Software Development · Web Technologies',
  },
]

export const currentlyBuilding = [
  { name: 'AI Voice Assistant', status: 'Development' },
  { name: 'Cab Booking Platform', status: 'Improving' },
  { name: 'Personal Portfolio', status: 'Active' },
] as const
