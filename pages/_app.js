import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
    </Provider>
  );
}

export default MyApp;
