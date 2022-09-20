import "../styles/globals.css";
import ScrollObserver from "../components/scrollobserver";
import type { AppProps } from "next/app";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Navbar />
      <Component {...pageProps} />
    </ScrollObserver>
  )
}

export default MyApp;
