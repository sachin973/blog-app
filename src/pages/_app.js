// pages/_app.js
import "../styles/404.scss";
import { useStore } from '@/redux/store';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <>      <Head>
    {/* Meta tags for SEO */}
    <meta name="description" content="My page description" />
    <meta name="keywords" content="next.js, meta tags, example" />

    {/* Favicon */}
    {/* <link rel="icon" href="/favicon.ico" /> */}


    {/* Set the title of the page */}
    <title>my-blog-app</title>
  </Head>
    <Provider store={store}>
     <Toaster />
      <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default MyApp;
