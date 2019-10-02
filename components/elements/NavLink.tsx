// --- Dependencies
import * as React from 'react'
import { Link, Box } from '@chakra-ui/core'

/**
 * Types
 */

interface IProps {
  href: string
  children: React.ReactNode
  number: number
}

/**
 * Component
 */

const NavLink: React.FC<IProps> = ({ href, children, number }) => (
  <Link href={href} _hover={{ color: 'indigo.9' }} ml={6} fontWeight={400}>
    <Box
      as="span"
      fontFamily="body"
      style={{ fontFeatureSettings: "'frac' 1" }}
      display="inline-block"
      mr={2}
      fontSize={14}
      color="gray.5"
    >
      0.{number}
    </Box>
    {children}
  </Link>
)

export default React.memo(NavLink)
