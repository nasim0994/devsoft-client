import React from "react";
import Aboutus from "../../components/Aboutus/Aboutus";
import Banner from "../../components/Banner/Banner";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <section className="w-[90%] mx-auto">
      <Banner />
      <CompanyInfo />
      <Services />
      <Aboutus />
    </section>
  );
};

export default Home;
