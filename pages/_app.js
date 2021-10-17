import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // useIntersectionObserver();
  return <Component {...pageProps} />;
}

export default MyApp;
