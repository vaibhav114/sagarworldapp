import { useQuery } from "@apollo/client";
import { useState } from "react";
import { CountryList, Filter, Loading, Search } from "../components";
import { COUNTRIES_INFO } from "../components/schema";

const REGIONS = [
  { id: 1, name: "Filter by Region" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Americas" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
  { id: 7, name: "Polar" },
];

type Prop = propCountry[];

export interface propCountry {
  node: {
    id: string;
    name: string;
    population: string;
    region: string;
    capital: string;
    flag: string;
  };
}

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [selectregion, setSelectRegion] = useState(REGIONS[0]);

  const { data, loading, error } = useQuery(COUNTRIES_INFO);

  // search feature
  const filteredCountries: Prop =
    search !== ""
      ? data?.countries?.edges?.filter((country: propCountry) =>
          country.node.name.toLowerCase().includes(search.toLocaleLowerCase())
        )
      : data?.countries?.edges;

  // filter feature
  const filteredCountriesByRegion =
    selectregion.id !== 1
      ? filteredCountries?.filter(
          (country: propCountry) => country.node.region === selectregion.name
        )
      : filteredCountries;

  return (
    <div className="text-sm">
      <div className="containe my-11 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <Search search={search} setSearch={setSearch} />
        <Filter
          regions={REGIONS}
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
