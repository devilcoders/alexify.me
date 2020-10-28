const oc = require('open-color/open-color.json')

module.exports = {
  experimental: 'all',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Iosevka Sparkle Web', 'sans-serif'],
    },
    extend: {
      colors: { ...oc },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    zIndex: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [],
}
