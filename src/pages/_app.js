import { GalleryProvider } from "components/GalleryContext/GalleryContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GalleryProvider>
        <Component {...pageProps} />
      </GalleryProvider>
    </>
  );
}

export default MyApp;
