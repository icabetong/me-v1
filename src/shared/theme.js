import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Jetbrains Mono',
    body: 'Jetbrains Mono'
  }
});

export default theme;