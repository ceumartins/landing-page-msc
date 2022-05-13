module.exports = {
  mode: 'jit',
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      lato: "'Lato', serif"
    },
    colors: {
      ...require('tailwindcss/colors'),
      primary_first_color: '#006088',
      primary_second_color: '#3080A5',
      primary_dark_color: '#004B66',
      secundary_first_color: '#F58634',
      secundary_second_color: '#F9A665',
      secundary_third_color: '#FFCEA4',
      secundary_dark_color: '#DB702E',
      gray_color: '#5A5959',
      gray_mid_color: '#A3A3A3',
      gray_light_color: '#E0E0E0',
      gray_extra_light_color: '#F6F6F6',
      bright_color: '#FEFEFE',
      dark_color: '#201E1E',
      success_color: '#34A871',
      warning_color: '#F5B940',
      error_color: '#D4382C',
      info_color: '#3080A5'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require('tailwind-scrollbar'), require('@tailwindcss/line-clamp')]
}
