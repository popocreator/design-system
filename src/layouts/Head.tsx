import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function Head() {
  return (
    <HelmetProvider>
      <Helmet>
        <link
          href='https://fonts.googleapis.com/css2?family=Blinker:wght@100;200;300;400;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
    </HelmetProvider>
  );
}
