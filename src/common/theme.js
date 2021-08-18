const BREAKPOINTS = {
  xs: '0px',
  sm: '375px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
};

const MEDIAS = {
  xl: { min: BREAKPOINTS.xl, key: 'xl' },
  lg: { min: BREAKPOINTS.lg, key: 'lg' },
  md: { min: BREAKPOINTS.md, key: 'md' },
  sm: { min: BREAKPOINTS.sm, key: 'sm' },
  xs: { min: BREAKPOINTS.xs, key: 'xs' },
};

const COLORS = {
  primary: {
    light: '#582DD280',
    DEFAULT: '#582DD2',
    dark: '#6E3EF880',
  },
  primaryAlpha: {
    light: '#07ABE280',
    DEFAULT: '#07ABE2',
    second: '#0484FB',
  },
  primaryBeta: {
    light: '#4F69EB80',
    DEFAULT: '#4F69EB',
  },
  lightSecond: '#FBFBFF',
  primaryLight: '#1B3EFF',
  primaryGamma: '#3500CC',
  primaryGrey: '#334669',
  secondary: '#E3E6FC',
  warrning: '#FF3565',
  light: '#FFFFFF',
  lightAlpha: '#EBEDF4',
  lightBeta: '#626D9A',
  lightGray: {
    DEFAULT: '#B4B6CA',
    beta: '#979797',
  },
  dark: {
    alpha: '#6C6B72',
    DEFAULT: '#353638',
    beta: '#302E43',
  },

  body: '#FAFBFD',
  bodyTransparent: '#FAFBFD80',
  orange: '#FF5720',
  danger: '#e3342f',
  selectedItem: '#8566FF',
  success: '#23DFBD',
  succesAlpha: '#079E83',
  info: '#C6CEDA',
  divider: '#E3E6F4',
  blue: '#4746BD',
  green: '#079E83',
};

const FONT_SIZES = {
  tiny: ['0.625rem', '15px'], //10px
  xs: '.75rem', //12px
  '1xs': ['0.8125rem', '19.5px'], //13px
  sm: '.875rem', //14px
  '1sm': ['0.9375rem', '22.5px'], //15px
  base: ['1rem', '24px'], //16px
  lg: '1.125rem', //18px
  xl: '1.25rem', //20px
  '1xl': ['1.375rem', '32px'], //22 px
  '2xl': ['1.5rem', '32px'], // 24px
  '3xl': ['1.75rem', '42px'], //28px
  '4xl': '1.875rem', //30px
  '5xl': '2rem', //32px
  '6xl': ['2.25rem', '48px'], //36px
  '7xl': ['2.625rem', '63px'], //46px
  '8xl': ['3rem', '72px'], //48px
  '9xl': '4rem', // 64px
};

const theme = {
  breakpoints: BREAKPOINTS,
  medias: MEDIAS,
  colors: COLORS,
  fontSizes: FONT_SIZES,
};
module.exports = theme;
