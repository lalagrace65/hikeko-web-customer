import { createGlobalStyle } from "styled-components";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { GoogleMapsProvider } from '@/context/GoogleMapsContext';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
  body{
    padding:0;
    margin:0;
    font-family: "Rubik", sans-serif;
  }
`;
// Extend Chakra UI theme if needed
const theme = extendTheme({
  // Add custom Chakra UI theme settings here
});

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GoogleMapsProvider>
        <GlobalStyles/>
        <Component {...pageProps} />
      </GoogleMapsProvider>
    </ChakraProvider>
  );
}
