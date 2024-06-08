/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
       // 'custom-tall': '0 70px 10px 100px rgba(1,65,55,0.5), 0 5px 10px 0px rgba(1,65,55, 0.5)', // Adjust the values as needed
      },
      colors: {
        primary: '#014137',  // Add your custom color here
        secondary: {
          normal : '#E4CDB4',
          dark : '#B8A075'
        }, // Add your custom color here
      },
    },
  },
  plugins: [],
};
