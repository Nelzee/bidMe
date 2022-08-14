import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Layout>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
