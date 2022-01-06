import "tailwindcss/tailwind.css";
import { ContextProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
