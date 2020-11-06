/**
 * Types
 */

type Props = {
  date: string
  title: string
  description: string | string[]
}

/**
 * Component
 */

export const TimelineCard: React.FC<Props> = ({ date, title, description }) => (
  <div className="grid grid-cols-3">
    <div className="col-span-1">
      <time>{date}</time>
    </div>
    <div className="col-span-2 space-y-3">
      <h3 className="font-bold">{title}</h3>
      {typeof description === 'string' ? (
        <p>{description}</p>
      ) : (
        description.map((paragraph) => <p>{paragraph}</p>)
      )}
    </div>
  </div>
)
