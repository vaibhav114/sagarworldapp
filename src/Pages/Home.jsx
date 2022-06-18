import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CountryList, Filter, Loading, Navbar, Search } from "../components";
import getSchema from "../components/schema";

const regions = [
  { id: 1, name: "All" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Americas" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
  { id: 7, name: "Polar" },
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectregion, setSelectRegion] = useState(regions[0]);

  const query = getSchema();
  const { data, loading } = useQuery(query);

  // search feature
  const filteredCountries =
    search !== ""
      ? data?.countries?.edges?.filter((country) =>
          country.node.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : data?.countries?.edges;

  // filter feature
  const filteredCountriesByRegion =
    selectregion.id !== 1
      ? filteredCountries?.filter(
          (country) => country.node.region === selectregion.name
        )
      : filteredCountries;

  return (
    <div className="text-sm">
      <Navbar />
      <div>
        <Search search={search} setSearch={setSearch} />
        <Filter
          regions={regions}
          selectregion={selectregion}
          setSelectRegion={setSelectRegion}
        />
      </div>
      {loading && <Loading />}
      {!loading && <CountryList countries={filteredCountriesByRegion} />}
    </div>
  );
};

export default Home;
