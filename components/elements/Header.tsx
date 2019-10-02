// --- Dependencies
import * as React from 'react'
import { Box, Flex, Image } from '@chakra-ui/core'

// --- Components
import NavLink from './NavLink'

/**
 * Component
 */

const Header = () => (
  <Box as="header" p={3}>
    <Flex alignItems="center" justifyContent="space-between" width="100%">
      <Image
        src="/images/avatar.jpg"
        width={16}
        height={16}
        borderRadius={100}
      />
      <Box
        as="nav"
        fontFamily="mono"
        p={3}
        fontWeight={500}
        fontSize={18}
        textTransform="uppercase"
        color="gray.7"
      >
        <NavLink href="/" number={1}>
          About
        </NavLink>
        <NavLink href="/" number={2}>
          Resume
        </NavLink>
        <NavLink href="/" number={3}>
          Works
        </NavLink>
        <NavLink href="/" number={4}>
          Contact
        </NavLink>
      </Box>
    </Flex>
  </Box>
)

export default Header
