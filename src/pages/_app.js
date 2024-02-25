import { ChakraProvider } from '@chakra-ui/react';
import localFont from 'next/font/local';

import customTheme from '@/styles/theme';

const migraExtraBold = localFont({
  src: '../../public/fonts/Migra-Extrabold.otf'
});

const neueMontrealItalic = localFont({
  src: '../../public/fonts/NeueMontreal-Italic.otf'
});

const neueMontrealRegular = localFont({
  src: '../../public/fonts/NeueMontreal-Regular.otf'
});

const hackRegular = localFont({
  src: '../../public/fonts/Hack-Regular.ttf'
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* eslint-disable-next-line */}
      <style global jsx>
        {`
          :root {
            --font-migra-extra-bold: ${migraExtraBold.style.fontFamily};
            --font-neue-montreal-italic: ${neueMontrealItalic.style.fontFamily};
            --font-neue-montreal-regular: ${neueMontrealRegular.style
              .fontFamily};
            --font-hack-regular: ${hackRegular.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
