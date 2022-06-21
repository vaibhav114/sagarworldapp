import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CountryList, Filter, Loading, Search } from "../components";

import { getCountriesInfo } from "../components/schema";

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

  const query = getCountriesInfo();
  const { data, loading, error } = useQuery(query);

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
      <div className="containe my-11 flex flex-col items-center justify-between space-y-4 sm:flex-row">
        <Search search={search} setSearch={setSearch} />
        <Filter
          regions={regions}
          selectregion={selectregion}
          setSelectRegion={setSelectRegion}
        />
      </div>
      <div className="containe">
        {error && <div>{error.message}</div>}
        {loading && <Loading />}
        {!loading && <CountryList countries={filteredCountriesByRegion} />}
      </div>
    </div>
  );
};

export default Home;
