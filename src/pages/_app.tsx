import type { AppProps } from "next/app";
import DashboardLayout from "../app/components/layout";
import Layout from "../app/components/layout";

import '../app/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
