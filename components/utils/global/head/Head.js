import NextHead from "next/head";

function Head({ title = "" }) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Endre Makra-Stenkløv" />
      <meta
        name="description"
        content="Portfolio for frontend-developer Endre Makra-Stenkløv"
      />
    </NextHead>
  );
}

export default Head;
