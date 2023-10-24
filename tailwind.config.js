/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Graphik', 'sans-serif']
		},
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				accent: {
					1: 'hsl(var(--color-accent1) / <alpha-value>)',
					2: 'hsl(var(--color-accent2) / <alpha-value>)'
				},
				bkg: 'hsl(var(--color-bkg) / <alpha-value>)',
				content: 'hsl(var(--color-content) / <alpha-value>)'
			},
			keyframes: {
				playing: {
					'0%, 100%': { transform: 'scaleY(0.1)' },
					'50%': { transform: 'scaleY(1)' }
				},
				playing2: {
					'0%, 100%': { transform: 'scaleY(0.1)' },
					'30%': { transform: 'scaleY(1)' }
				},
				playing3: {
					'0%, 100%': { transform: 'scaleY(0.1)' },
					'60%': { transform: 'scaleY(1)' }
				},
				playing4: {
					'0%, 100%': { transform: 'scaleY(0.1)' },
					'45%': { transform: 'scaleY(1)' }
				},
				playing5: {
					'0%, 100%': { transform: 'scaleY(0.1)' },
					'75%': { transform: 'scaleY(1)' }
				},
				cycle1: {
					'0%, 100%': { scale: '1' },
					'25%': { transform: 'translateX(60px)', scale: '0.5' },
					'50%': { transform: 'translate(30px, 20px)', scale: '1' },
					'75%': { transform: 'translateY(40px)', scale: '0.5' }
				},
				cycle2: {
					'0%, 100%': { scale: '1' },
					'25%': { transform: 'translateX(-60px)', scale: '0.5' },
					'50%': { transform: 'translate(-30px, -20px)', scale: '1' },
					'75%': { transform: 'translateY(-40px)', scale: '0.5' }
				},
				rotate: {
					rotate: '180deg'
				},
				drip: {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'75%': { transform: 'translate(0px, 30px)', scale: '1' },
					'100%': { transform: 'scale(1)', opacity: '0' }
				},
				ripple: {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(3)', opacity: '0' }
				},
				wiggle: {
					'25%': { transform: 'rotate(5deg)' },
					'75%': { transform: 'rotate(-5deg)' }
				}
			}
		}
	},
	plugins: []
}
