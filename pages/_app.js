import React, { useState } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          setSelectedIndex={setSelectedIndex}
          setValue={setValue}
        />

        <Footer setSelectedIndex={setSelectedIndex} setValue={setValue} />
      </ThemeProvider>
    </React.Fragment>
  );
}
