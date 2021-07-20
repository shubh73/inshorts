import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

