import '../styles/global.css';
import {Head} from "next/document";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
