import "@/styles/globals.scss";
import { ThemeProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    //enableSystem represents the system preference, wheter it is dark or light
    //based on this it will match our application theme
    <ThemeProvider enableSystem="true" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
