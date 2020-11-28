import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const MyApp: React.FC<{
  Component: React.ComponentType;
  pageProps: Record<string, unknown>;
}> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
