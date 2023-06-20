import PageWrapper from "../components/pageWrapper";
import { Navbar } from "../components/navbar";
import Map from "../components/map";
import { Filter } from "../components/filter";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Filter />
      <Map />
      <div>
        <PageWrapper />
      </div>
    </div>
  );
};
