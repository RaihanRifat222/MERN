import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: false,
    // [
    //   {
    //     'mytheme': {                       /* your theme name */
    //       'primary': '#882180',             /* Primary color */
    //       'primary-focus': '#ff0000',       /* Primary color - focused */
    //       'primary-content': '#ffffff',     /* Foreground content color to use on primary color */

    //       'secondary': '#f6d860',           /* Secondary color */
    //       'secondary-focus': '#f6d860',     /* Secondary color - focused */
    //       'secondary-content': '#ffffff',   /* Foreground content color to use on secondary color */

    //       'accent': '#37cdbe',              /* Accent color */
    //       'accent-focus': '#2aa79b',        /* Accent color - focused */
    //       'accent-content': '#ffffff',      /* Foreground content color to use on accent color */

    //       'neutral': '#3d4451',             /* Neutral color */
    //       'neutral-focus': '#2a2e37',       /* Neutral color - focused */
    //       'neutral-content': '#ffffff',     /* Foreground content color to use on neutral color */

    //       'base-100': '#ffffff',            /* Base color of page, used for blank spaces and background */
    //       'base-200': '#f9fafb',            /* Base color, a little darker, used for cards and surfaces */
    //       'base-300': '#d1d5db',            /* Base color, even more darker, used for inputs and active states */
    //       'base-content': '#1f2937',        /* Foreground content color to use on base color */

    //       'info': '#2094f3',                /* Info */
    //       'success': '#009485',             /* Success */
    //       'warning': '#ff9900',             /* Warning */
    //       'error': '#ff5724',               /* Error */
    //     },
    //   },
    // ],
  },
}