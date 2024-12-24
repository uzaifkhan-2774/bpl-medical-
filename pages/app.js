import "../app/globals.css" // Ensure global styles are imported

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
