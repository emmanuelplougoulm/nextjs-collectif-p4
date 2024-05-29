import "@/styles/reset.css";
import "@/styles/globals.css";
import "@/styles/fonts.css";

import type { AppProps } from "next/app";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
