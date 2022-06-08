import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { CountryList, Filter, Loading, Navbar, Search } from "../components";

const regions = [
  { id: 1, name: "All" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Americas" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
  { id: 7, name: "Polar" },
];

const COUNTRIES_INFO = gql`
  {
    countries {
      edges {
        node {
          name
          population
          region
          capital
          flag
        }
      }
    }
  }
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectregion, setSelectRegion] = useState(regions[0]);
  const { data, loading } = useQuery(COUNTRIES_INFO);

  // search feature
  const filteredCountries =
    search !== ""
      ? data?.countries?.edges?.filter((country) =>
          country.node.name.toLowerCase().includes(search)
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
    <div className="bg-gray-100 dark:bg-blue-200">
      <Navbar />
      <div className="mx-auto my-8 flex w-[90%] flex-col items-center justify-center sm:flex-row sm:justify-between lg:w-[86%]">
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
