/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      x3lr: { max: "1450px" },
      xxlr: { max: "1250px" },
      xlr: { max: "1050px" },
      lr: { max: "850px" },
      xmd: {max: "700px"},
      md: { max: "600px" },
      sm: { max: "480px" },
      xsm: { max: "350px" },

      xxxlr: {min: "1700px"},
      mdd: { min: "480px" },
      lrr: { min: "600px" },
      xlrr: { min: "850px" },
      txxs: "320px",
      txsm: "414px",
      tsm: "600px",
      tmd: "780px",
      tlg: "1024px",
      txl: "1280px",
      t2xl: "1536px",
      t3xl: "2570px",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
