import { Fragment } from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import PageContent from "./layouts/PageContent";
import Navbar from "./layouts/Navbar";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";

function App({ children }) {
  return (
    <Fragment>
      <Header />
      <PageContent children={children} />
      <Footer />
      <Toaster />
    </Fragment>
  );
}

export default App;
