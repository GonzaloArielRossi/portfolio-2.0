import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const customTheme = extendTheme({
  colors: {
    brandBlack: {
      800: '#1d202f'
    },
    brandCyan: {
      500: '#36bbfe'
    },
    brandGreen: {
      500: '#4d5c3f',
      800: '#31362d'
    },
    code: {
      100: '#22212C',
      200: '#FF5F56',
      300: '#FFBD2E',
      400: '#27C93F',
      500: '#8AF15A',
      600: '#47DCEA',
      700: '#EF86C0',
      800: '#FFFF80'
    },
    cyan: {
      50: '#E6F6FF',
      100: '#B8E7FF',
      200: '#8AD8FE',
      300: '#5DC8FE',
      400: '#2FB9FE',
      500: '#01A9FE',
      600: '#0187CB',
      700: '#016598',
      800: '#014465',
      900: '#002233'
    },
    gray: {
      50: '#EFF0F5',
      100: '#D3D6E4',
      200: '#B6BBD2',
      300: '#9AA1C1',
      400: '#7E86AF',
      500: '#616B9E',
      600: '#4E567E',
      700: '#3A405F',
      800: '#1E212E',
      900: '#131520'
    }
  },
  config,
  fonts: {
    body: 'var(--font-neue-montreal-regular)',
    heading: 'var(--font-migra-extra-bold)'
  },
  styles: {
    global: (props) => ({
      '*': {
        scrollBehavior: 'smooth'
      },
      body: {
        color: props.colorMode === 'dark' ? 'white' : '#2C3043'
      }
    })
  }
});

export default customTheme;
