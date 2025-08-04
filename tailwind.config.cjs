/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
		'./src/content/blog/**/*.md'
	],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  solarized: {
			// Light theme colors with Everforest Light soft palette
			bg: '#F3EAD3',        // Everforest bg0 - warm main background
			fg: '#F27255',        // Keep the orange accent as requested
			text: '#5C6A72',      // Everforest foreground - warm readable text
			button: '#D8D3BA',    // Everforest bg4 - warm button background
			buttonBg: '#EAE4CA',  // Everforest bg1 - slightly darker for active states
			accent: '#7FBBB3',    // Everforest blue - soft warm blue
			blue: '#3A94C5',      // Darker blue for better contrast on post titles
			yellow: '#DBBC7F',    // Everforest yellow - warm golden
			secondary: '#EAE4CA', // Everforest bg1 - secondary background
			border: '#DDD8BE',    // Everforest bg3 - warm border color
			disabled: '#9DA9A0',  // Everforest grey2 - muted but warm
			active: '#D8D3BA',    // Everforest bg4 - active state
			highlight: '#EAEDC8', // Everforest bg_visual - soft highlight
			green: '#A7C080',     // Everforest green - warm sage green
			red: '#E67E80',       // Everforest red - warm coral red
			purple: '#D699B6',    // Everforest purple - soft warm purple
			orange: '#E69875',    // Everforest orange - warm peach
			cyan: '#83C092',      // Everforest aqua - warm teal
			gray: '#859289',      // Everforest grey1 - warm neutral gray
			category: '#A7C080'   // Use Everforest green for categories
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
			'system-ui',
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
