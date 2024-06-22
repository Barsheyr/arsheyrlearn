import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Loading, Header, Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="font-primary bg-white95">
      <Header />
      <Navbar />
      {/* <Loading /> */}
      <section className="align-element py-20 font-primary">
        <Outlet />
      </section>
      <div className="bg-white99">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
