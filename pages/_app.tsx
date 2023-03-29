import "@/styles/globals.css";
import type { AppProps } from "next/app";
// 1. import `ChakraProvider` component
import { ChakraProvider} from "@chakra-ui/react";




export default function App({ Component, pageProps }: AppProps) {
  return (
    // ajouter le composant `ChakraProvider` au dessus de l'application avec la config
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
