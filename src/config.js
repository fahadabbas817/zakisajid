module.exports = {
  email: 'Zak6439@gmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/zaki-sajid',
    },
    {
      name: 'Email',
      url: 'mailto:Zak6439@gmail.com',
    },
    {
      name: 'Phone',
      url: 'tel:03126902391',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#00e5ff', // Neon Cyan
    navy: '#111111',   // Space Grey
    darkNavy: '#0a0a0a', // Pure Dark
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
