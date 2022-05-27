import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../utils/apollo"
import Head from "next/head"

// Add bootstrap css
import "bootstrap/dist/css/bootstrap.css"
// Custom css
import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

 
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
