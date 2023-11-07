/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors : { 
        primary_color: "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
        color_primary_variant: "#D434FE",
        colorwhite: "#fff",
        colorblack: "#000",
        colorbg: "#150E28",
        colorbg2:"#903AFF",
        lightOverlay: "rgba(256,256,256,0.2)",
        colorprimary: "#6c63ff",
        transition: "all 400ms ease",
        lineColor: 'rgba(255, 255, 255, 0.18)',
        cardbg: "rgba(212, 52, 254, 0.12)",
        cardbg2: "rgba(144, 58, 255, 0.12)",
        cardbg3: "rgba(217, 217, 217, 0.03)",
        fade: "rgba(255, 255, 255, 0.75)",
        footer:"#100B20"
        
      },

     fontFamily: {
        montserrat: [ 'Montserrat' ],
        verdana: ['verdana'],
        unica_one: ['Unica One'],
        roboto: ["'Roboto'", "san-serif"],
        opensans: ["'OpenSans'", "san-serif"],
      },

      backgroundBlendMode: {
         'luminosity': ' luminosity',
         'hard-light': ' hard-light',
      },

  },
  plugins: [],
 }
}
