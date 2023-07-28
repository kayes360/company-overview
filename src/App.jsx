import "./assets/css/Style.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TableSection from "./Components/TableSection";
import ClientsSection from "./Components/ClientsSection";
import CardSection from "./Components/CardSection";
import ServiceSection from "./Components/ServiceSection";
import GraphAndTableSection from "./Components/GraphAndTableSection";
import WeeklyTable from "./Components/WeeklyTable";
import CurrentClientSection from "./Components/CurrentClientSection";
import CTASection from "./Components/CTASection";
import Footer from "./Components/Footer";
import AvailableServiceSection from "./Components/AvailableServiceSection";

function App() {
  return (
    <>
        <Header />
        <Hero />
      <div className="container">
        <TableSection />
        <ClientsSection />
        <CardSection />
        <ServiceSection />

        <GraphAndTableSection />
        
        <AvailableServiceSection />
        <CurrentClientSection /> 
        <WeeklyTable /> 
        <CTASection />
      </div>
      <Footer />
    </>
  );
}

export default App;
