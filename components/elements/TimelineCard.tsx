// --- Utils
import { technologies } from 'data'

/**
 * Types
 */

type Props = {
  date: string
  title: string
  description: string | string[]
  stack?: { [key: string]: string[] }
}

/**
 * Helpers
 */

export const getTechData = (tech: string, techs: typeof technologies) =>
  techs.find((technology) => technology.id === tech)

/**
 * Component
 */

export const TimelineCard: React.FC<Props> = ({
  date,
  title,
  description,
  stack
}) => (
  <div className="-m-4 cursor-pointer flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-3 border border-transparent p-4 transition duration-300 ease-in-out hover:border-gray-1 hover:bg-gray-0">
    <div className="col-span-1">
      <time>{date}</time>
    </div>
    <div className="col-span-2 space-y-3">
      <h3 className="font-bold">{title}</h3>
      {typeof description === 'string' ? (
        <p className="pb-4">{description}</p>
      ) : (
        description.map((paragraph, index) => <p key={index}>{paragraph}</p>)
      )}
    </div>

    {stack && (
      <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:col-start-2 md:col-span-2 md:space-x-8 pt-4 border-t border-gray-1">
        {Object.keys(stack).map((key) => (
          <li key={key} className="space-y-3">
            <h4 className="uppercase text-xs text-gray-5 font-bold">{key}:</h4>
            <ul className="flex flex-wrap space-x-3">
              {stack[key].map((tech, index) => (
                <li
                  key={index}
                  className="font-bold whitespace-no-wrap text-sm"
                >
                  {getTechData(tech, technologies) ? (
                    <span className="transition-colors ease-in-out duration-200 tech-icon w-6 h-6 inline-flex">
                      {getTechData(tech, technologies)?.icon.component}
                      <style jsx>{`
                        .tech-icon:hover {
                          color: ${getTechData(tech, technologies)?.icon.color};
                        }
                      `}</style>
                    </span>
                  ) : (
                    tech
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}
  </div>
)
