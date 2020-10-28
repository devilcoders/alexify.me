// --- Dependencies
import { createGlobalState } from 'react-use'

// --- Data
import { Sections } from 'data/sections'

/**
 * Functions
 */

export const useActiveSection = createGlobalState<Sections>(Sections.About)
