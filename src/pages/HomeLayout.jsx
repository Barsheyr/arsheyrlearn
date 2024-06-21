import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="font-primary bg-[#F7F7F8]">
      <Header />
      <Navbar />
      {/* <Loading /> */}
      <section className="align-element py-20 font-primary">
        <Outlet />
      </section>
      <div className="bg-whiteFour">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
