/**
 * Types
 */

type Props = {
  title: string
}

/**
 * Component
 */

const Section: React.FC<Props> = ({ title, children }) => (
  <section className="py-16">
    <h1 className="mb-12 relative z-1 text-5xl uppercase font-bold text-gray-5">
      {title}
    </h1>

    <div className="text-gray-3 text-lg relative z-10 max-w-md space-y-6">
      {children}
    </div>
  </section>
)

export default Section
