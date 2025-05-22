/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/pages/**/*.md',
		'./src/pages/**/*.mdx'
	],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  solarized: {
			// Light theme colors with Solarized values
			bg: '#fdf6e3',        // Base3 (background)
			fg: '#F27255',        // Changed to orange #F27255 as requested
			text: '#586e75',      // Slightly lighter than fg for secondary text
			button: '#d8d4c4',    // From your Solarized list
			buttonBg: '#d1cdbe',  // Less bright background for sun button (D1CDBEFF)
			accent: '#2b6cb0',    // Soft blue (matching moon icon)
			blue: '#2b6cb0',      // Updated blue for post titles as requested
			yellow: '#b58900',    // Yellow from Solarized
			secondary: '#F6F0DE', // Second Background from your list
			border: '#edead9',    // Border from your list
			disabled: '#C9CCC3',  // Disabled from your list
			active: '#d1cbb8',    // Active from your list
			highlight: '#d1cbb8', // Highlight from your list
			green: '#859900',     // Green from Solarized
			red: '#f7b6b3',       // Updated color for category titles as requested
			purple: '#6c71c4',    // Violet from Solarized
			orange: '#cb4b16',    // Orange from Solarized
			cyan: '#2aa198',      // Cyan from Solarized
			gray: '#657b83',       // Base00 from Solarized (darker gray for better contrast)
			category: "#B8935A"
		  },
		  nightowl: {
			// Night Owl dark theme colors (unchanged)
			bg: '#011627',        
			fg: '#F27255',        // Changed to orange #F27255 as requested
			text: '#d6deeb',      
			button: '#0b253a',    
			accent: '#f7a5a5',    // Soft pastel red that complements the orange fg color
			blue: '#2BA9E3',      // Custom blue for post titles (unchanged for dark mode)
			yellow: '#ecc48d',    
			buttonBg: '#1e3951',  // More distinct background for moon button in dark mode
			secondary: '#0b2942', 
			border: '#122d42',    
			disabled: '#697098',  
			active: '#13344f',    
			highlight: '#084d81', 
			green: '#addb67',     
			red: '#f7b6b3',       // Updated color for category titles as requested
			purple: '#c792ea',    
			orange: '#f78c6c',    
			cyan: '#7fdbca',      
			gray: '#637777',
			category: "#E1BB87"       
		  }
		},
		fontFamily: {
		  sans: [
			'Raleway',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Helvetica',
			'Arial',
			'sans-serif'
		  ]
		}
	  }
	},
	plugins: [
	  require('@tailwindcss/typography')
	]
  }
