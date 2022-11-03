import type { AppProps } from "next/app"
import StrapiApolloProvider from "../graphql/apollo"

import SSRProvider from "react-bootstrap/SSRProvider"
// Add bootstrap css
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/css/bootstrap.min.css"

// Custom css
import "../styles/globals.scss"

//Layout Component
import PageLayout from "../components/layout/PageLayout"

function App({ Component, pageProps }: AppProps) {
  return (
    // <StrapiApolloProvider>
    <SSRProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SSRProvider>
    // </StrapiApolloProvider>
  )
}

export default App
