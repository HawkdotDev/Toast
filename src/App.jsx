import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "./components";

const App = () => (
  <div className="bg-[#141414] w-full overflow-hidden">
    <Navbar />
    <div className={`bg-[#141414] flex justify-center items-start`}>
      <div className={` xl:max-w-[1280px] w-full mx-auto}`}>
        <Hero />
      </div>
    </div>

    <div
      className={`bg-[#141414] px-6} flex justify-center items-center`}
    >
      <div className={` xl:max-w-[1280px] w-full mx-auto}`}>
        <Stats />
        <Business />
        {/* <Billing />
        <CardDeal /> */}
        <Testimonials />
        {/* <Clients /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
