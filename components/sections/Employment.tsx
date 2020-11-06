// --- Components
import Section from 'elements/Section'
import { TimelineCard } from 'elements/TimelineCard'

/**
 * Helpers
 */

const EMPLOYMENT = [
  {
    id: 'codeLab',
    date: 'Feb 2020 - Present',
    position: 'Senior Frontend Developer & Designer',
    company: '360 Code Lab',
    location: 'Warsaw',
    employment: 'Full-time',
    description:
      'I’m working on eventWorld.com ticket platform. I am responsible for frontend and design of the project after we pick it up from another software house.',
    stack: {
      backend: ['Scala', 'Lagom'],
      frontend: ['TypeScript', 'React', 'TailwindCSS'],
      design: ['Figma', 'Zeplin'],
    },
  },
  {
    id: 'sparkSolutions',
    date: 'Jan 2018 - Feb 2020',
    position: 'Senior Frontend Developer',
    company: 'Spark Solutions',
    location: 'Warsaw',
    employment: 'Full-time',
    description:
      'Open-Source work on Spree - Ruby on Rails e-commerce engine. Frontend work on multiple international e-commerce websites.',
    stack: {
      backend: ['Ruby', 'Rails', 'Spree', 'Solidus'],
      frontend: ['TypeScript', 'React', 'SASS', 'Tachyons'],
    },
  },
  {
    id: 'handshake',
    date: 'Jan 2016 - Present',
    position: 'Co-Founder',
    company: 'Handshake.work',
    location: 'Warsaw',
    employment: 'Side-Project',
    description:
      "Side-project we're doing with a friend. My field of work is related to frontend and devops work. As part of the project, I'm also working on collaborative WYSIWYG editor.",
    stack: {
      backend: ['Elixir', 'Phoenix'],
      devops: ['Docker', 'CapRover', 'GitLab'],
      frontend: [
        'TypeScript',
        'Phoenix LiveView',
        'TailwindCSS',
        'Alpine.js',
        'Prosemirror',
        'YJS',
      ],
      design: ['Figma'],
    },
  },
  {
    id: 'firstData',
    date: 'Jul 2015 - Jan 2018',
    position: 'Senior Application Analyst',
    company: 'Handshake.work',
    location: 'Warsaw',
    employment: 'Side-Project',
    description:
      'Few in-house products built using Next.js. Big in-house project on Rails, similar to Shopify.',
    stack: {
      backend: ['Ruby', 'Rails', 'Serverless.js'],
      frontend: ['JavaScript', 'React', 'Next.js'],
      design: ['Sketch'],
    },
  },
]

/**
 * Component
 */

export const Employment = () => (
  <Section title="Employment">
    <div className="space-y-20">
      {EMPLOYMENT.map((job) => (
        <TimelineCard
          key={job.id}
          date={job.date}
          title={`${job.position} @ ${job.company}`}
          description={job.description}
        />
      ))}
    </div>
  </Section>
)
