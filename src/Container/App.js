import React from 'react';
import chakraTheme from "@chakra-ui/theme";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SaviRoutes from '../Navigation/Index';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();


function App () {
  const theme = extendTheme({
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    components: {
      Progress: {
        baseStyle: {
          track: {
            bg: "#f2f4f7",
          },
          filledTrack: {
            bg: "#b5179e",
          },
        },
      }
    }
  });
  return (
    <>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SaviRoutes />
      </ChakraProvider>
    </QueryClientProvider>
 
    </>
  )
}

export default App