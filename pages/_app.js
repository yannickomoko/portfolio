import "tailwindcss/tailwind.css";
import "react-circular-progressbar/dist/styles.css";
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
