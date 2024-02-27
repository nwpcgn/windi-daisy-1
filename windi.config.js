import { defineConfig, transform } from 'windicss/helpers'
import colors from 'windicss/colors'
import plugin from 'windicss/plugin'
export default defineConfig({
	darkMode: 'class', // or 'media'
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			colors: {
				blue: colors.sky,
				red: colors.rose,
				gray: colors.slate,
				transparent: 'transparent',
				current: 'currentColor',
				primary: {
					50: '#f0f4fb',
					100: '#ccdaf1',
					200: '#a8c0e7',
					300: '#83a5de',
					400: '#5f8bd4',
					500: '#3b71ca',
					600: '#315ea8',
					700: '#274a86',
					800: '#1c3763',
					900: '#122341'
				}
			},
			fontFamily: {
				sans: ['Graphik', 'sans-serif'],
				serif: ['Merriweather', 'serif']
			},
			spacing: {
				128: '32rem',
				144: '36rem'
			},
			borderRadius: {
				'4xl': '2rem'
			}
		}
	},
	plugins: [
		//  plugin(({ addUtilities }) => {
		//    const newUtilities = {
		//      '.skew-10deg': {
		//        transform: 'skewY(-10deg)',
		//      },
		//      '.skew-15deg': {
		//        transform: 'skewY(-15deg)',
		//      },
		//    }
		//    addUtilities(newUtilities)
		//  }),
		//  plugin(({ addComponents }) => {
		//    const buttons = {
		//      '.btn': {
		//        padding: '.5rem 1rem',
		//        borderRadius: '.25rem',
		//        fontWeight: '600',
		//      },
		//      '.btn-blue': {
		//        'backgroundColor': '#3490dc',
		//        'color': '#fff',
		//        '&:hover': {
		//          backgroundColor: '#2779bd',
		//        },
		//      },
		//      '.btn-red': {
		//        'backgroundColor': '#e3342f',
		//        'color': '#fff',
		//        '&:hover': {
		//          backgroundColor: '#cc1f1a',
		//        },
		//      },
		//    }
		//    addComponents(buttons)
		//  }),
		//  plugin(({ addDynamic, variants }) => {
		//    addDynamic('skew', ({ Utility, Style }) => {
		//      return Utility.handler
		//        .handleStatic(Style('skew'))
		//        .handleNumber(0, 360, 'int', number => `skewY(-${number}deg)`)
		//        .createProperty('transform')
		//    }, variants('skew'))
		//  }),
		// require('@windicss/plugin-animations')({
		//   settings: {
		//     animatedSpeed: 1000,
		//   },
		// }),
		require('windicss/plugin/filters'),
		require('windicss/plugin/forms'),
		require('windicss/plugin/aspect-ratio'),
		require('windicss/plugin/line-clamp'),
		require('windicss/plugin/typography')({
			modifiers: ['DEFAULT', 'sm', 'lg', 'red']
		}),
		transform('daisyui'),
		require('daisyui')
	]
})
