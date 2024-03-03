/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        purple: "#8A49CB",
        stepWhite: "#F2EAF9",
        primary: "#fff",
        grayLoading: "#D9D9D9",
        blue: "#3574D3",
      },
     
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      comfortaa: ["Comfortaa", "cursive"],
    },
    boxShadow: {
      shaForm: "0px 0px 70px 15px rgba(94,94,94,0.1)",
    },
    backgroundImage: {
      "login-image1": "url('/src/assets/login1.png')",
      "login-image2": "url('/src/assets/login2.png')",
      "login-image3": "url('/src/assets/login3.png')",
      "login-image4": "url('/src/assets/login4.png')",
      "rectangle-register": "url('/src/assets/rectangle-register.svg')",
    },
  },
  plugins: [],
};
