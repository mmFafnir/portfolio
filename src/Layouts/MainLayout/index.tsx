import { FC } from "react";

import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Socials from "../../components/UI/Socials";
import Modal from "../../components/Modal";
import InstrumentsModal from "../../components/Modal/InstrumentsModal";
const MainLayout: FC = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Socials />
      </div>
      <Modal children={<InstrumentsModal />} />
    </div>
  );
};

export default MainLayout;
