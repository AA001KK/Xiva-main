/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1560px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        shadowCard: "5px 2px 30px hsla(257, 8%, 83%, .3)",
        shadowKombo: "0px 0 15px rgba(0,0,0,.085)",
        shadowUlButton: "0px 0px 13px rgba(0,0,0,.05)",
        shadowCancelBtn: "2px 2px 10px rgba(0,0,0,.1)",
        shadowKorzinkaPrice: "0px 3px 15px hsla(0,0%,85%,.3)",
        shadowDynamicPage: "-10px 0 30px hsla(257, 8%, 83%, .25);",
        shadowKomboItmes: "5px 2px 30px hsla(257,8%,83%,.25);",
        shadowLang: " -2px 0px 52px -4px rgba(34, 60, 80, 0.2);",
        shadowInput: "0 0 0 0.25rem rgba(236, 100, 22, 0.35)",
        // box-shadow:
      },
    },
    fontFamily: {
      proppins: ["Proppins", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      playfair: ["Playfair Display", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      mono: ["Montserrat"],
    },
    colors: {
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#008000",
      yellow: "#ffc82c",
      black: "#1E1E1E",
      desc: "#646464",
      blue: "#202",
      blueLight: "#2023381a",
      gray: "#525151",
      grayLight: "#828282",
      border: "rgba(0,0,0,.05)",
      white: "#ffffff",
      main: "#EC6416",
      grayBlog: "#525151",
      red: "#FF0000",
      save:"#007BFF"
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
