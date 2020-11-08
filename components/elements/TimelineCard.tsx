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
 * Component
 */

export const TimelineCard: React.FC<Props> = ({
  date,
  title,
  description,
  stack
}) => (
  <div className="-m-4 cursor-pointer grid grid-cols-3 border border-transparent p-4 transition duration-300 ease-in-out hover:border-gray-1 hover:bg-gray-0">
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

    {stack && (
      <div className="col-start-2 col-span-2 space-y-4 pt-4 mt-4 border-t border-gray-1">
        {Object.keys(stack).map((key) => (
          <div>
            <h4 className="uppercase text-xs text-gray-5 font-bold">{key}:</h4>
            <ul className="flex flex-wrap">
              {stack[key].map((tech, index) => (
                <li
                  key={index}
                  className="font-bold whitespace-no-wrap text-sm"
                >
                  {tech}
                  {index !== stack[key].length - 1 && (
                    <span className="px-3 font-normal text-gray-5">/</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    )}
  </div>
)
