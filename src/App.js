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
import DHL from "./Screen/DHL";
import CarRental from "./Screen/CarRental";
import InternationFlight from "./Screen/InternationaFlight";
import PhotoGallery from "./Screen/PhotoGallery";
import TeamMember from "./Screen/TeamMember";

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
          <Route path="/dhl" element={<DHL />}></Route>
          <Route path="/carrental" element={<CarRental />}></Route>
          <Route
            path="/internationalflight"
            element={<InternationFlight />}
          ></Route>
          <Route path="/tablic-restaurants" element={<TablicRes />}></Route>
          <Route path="/photogallery" element={<PhotoGallery />}></Route>
          <Route path="/teammember" element={<TeamMember />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
