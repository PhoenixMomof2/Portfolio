/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'right-bottom': '6px 6px 0px 0px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(#e66465, #f5f5f5, #f5f5f5 20%);",        
      
        circularDark:
        "repeating-radial-gradient(#e66465 2px,#1b1b1b 8px,#1b1b1b 100px)",

        circularLightLg:
            "repeating-radial-gradient(#e66465 2px,#f5f5f5 5px,#f5f5f5 80px)",

        circularDarkLg:
            "repeating-radial-gradient(#e66465 2px,#1b1b1b 8px,#1b1b1b 80px)",

        circularLightMd:
            "repeating-radial-gradient(e66465 2px,#f5f5f5 5px,#f5f5f5 60px)",

        circularDarkMd:
            "repeating-radial-gradient(#e66465 2px,#1b1b1b 6px,#1b1b1b 60px)",

        circularLightSm:
            "repeating-radial-gradient(e66465 2px,#f5f5f5 5px,#f5f5f5 40px)",

        circularDarkSm:
            "repeating-radial-gradient(#e66465 2px,#1b1b1b 4px,#1b1b1b 40px)",
        },
        boxShadow: {
          "3xl": "0 15px 15px 1px rgba(80,230,217, 0.4)",
        },
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}