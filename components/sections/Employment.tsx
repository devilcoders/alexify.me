// --- Components
import Section from 'elements/Section'
import { TimelineCard } from 'elements/TimelineCard'

// --- Data
import { EMPLOYMENT } from 'data'

/**
 * Component
 */

export const Employment = () => (
  <Section title="Employment">
    <div className="space-y-20">
      {EMPLOYMENT.map(({ id, date, position, company, ...restJobData }) => (
        <TimelineCard
          key={id}
          date={date}
          title={`${position} @ ${company}`}
          {...restJobData}
        />
      ))}
    </div>
  </Section>
)
