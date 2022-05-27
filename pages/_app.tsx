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
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
