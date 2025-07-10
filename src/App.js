import Header from "../src/Main/Header";
import Footer from "../src/Main/Footer";
import Home from "../src/Home/Home";
import KeboraMachine from "./Screen/KerboraMachine/KeboraMachine";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeboraDiamond from "./Screen/KeboraDiamond/KeboraDiamond";
import KeboraGasSupply from "./Screen/KeboraGasSupply/KeboraGasSupply";
import KeboraFinance from "./Screen/KeboraFinance/KeboraFinance";
import ContactUsForm from "./Screen/ContactUsForm/ContactUsForm";
import Policy from "../src/Screen/Policy/Policy";
import ScrollToTop from "./Main/ScrollToTop";
import TablicRes from "./Screen/TablicRes/TablicRes";

function App() {
  return (
    <>
      {/* <AnimatedBalls /> */}
      <BrowserRouter>
        {/* <Scrollingtop /> */}
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/kebora-machines" element={<KeboraMachine />}></Route>
          <Route path="/kebora-diamond" element={<KeboraDiamond />}></Route>
          <Route
            path="/kebora-gas-supply"
            element={<KeboraGasSupply />}
          ></Route>
          <Route path="/kebora-finance" element={<KeboraFinance />}></Route>
          <Route path="/contactus" element={<ContactUsForm />}></Route>
          <Route path="/policy" element={<Policy />}></Route>
          <Route path="/tablic-restaurants" element={<TablicRes />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
