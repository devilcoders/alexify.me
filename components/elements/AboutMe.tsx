// --- Dependencies
import * as React from 'react'
import { Box, Text, Heading } from '@chakra-ui/core'

/**
 * Component
 */

const AboutMe = () => (
  <Box>
    <Heading as="h1" mb={4}>
      <Box
        zIndex={0}
        mt={-10}
        as="span"
        color="gray.1"
        position="absolute"
        fontSize="50vh"
      >
        01.
      </Box>{' '}
      <Box
        as="span"
        position="relative"
        zIndex={1}
        fontSize={26}
        color="indigo.7"
        fontWeight={900}
        textTransform="uppercase"
        letterSpacing={1.9}
      >
        About Me
      </Box>
    </Heading>
    <Box
      color="gray.7"
      fontSize={18}
      lineHeight={1.7}
      position="relative"
      zIndex={1}
      maxWidth={400}
    >
      <Text mb={5}>
        Writing clean valid code and designing web applications is my passion.
        It's part of my everyday life, and I'm really enjoying it. I started
        programming in school and since then fall in love with software
        development.
      </Text>
      <Text mb={5}>
        After graduation, I decided to try myself in design and spent few years
        working in printing and advertising agencies. At some point, I finally
        get to what I'm doing now - combining design & programming skills to
        build user interfaces for the web.
      </Text>
      <Text mb={5}>
        I love trying new technologies, finding new ways of doing things in a
        simpler and clever way and learning.
      </Text>
      <Text mb={5}>
        Besides that, I also love playing & writing music, shooting photos and
        travelling.
      </Text>
    </Box>
  </Box>
)

export default AboutMe
