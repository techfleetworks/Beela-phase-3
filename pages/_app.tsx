import type { AppProps } from "next/app"
import StrapiApolloProvider from "../graphql/apollo"
import Head from "next/head"

// Add bootstrap css
import "bootstrap/dist/css/bootstrap.css"
// Custom css
import "../styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  return (
    // <StrapiApolloProvider>
    <Component {...pageProps} />
    // </StrapiApolloProvider>
  )
}

export default App
