/**
 * Helpers
 */

const COMPANIES = []

/**
 * Component
 */

const Companies = () => (
  <ul>
    {COMPANIES.map((company) => (
      <li>{company.name}</li>
    ))}
  </ul>
)

export default Companies
