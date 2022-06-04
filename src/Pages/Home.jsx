import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CountryList,
  Error,
  Filter,
  Loading,
  Navbar,
  Search,
} from "../components";

const regions = [
  { id: 1, name: "Filter by Region" },
  { id: 2, name: "Europe" },
  { id: 3, name: "Americas" },
  { id: 4, name: "Africa" },
  { id: 5, name: "Polar" },
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
  const { data, loading, error } = useQuery(COUNTRIES_INFO);

  const filteredCountries =
    search !== ""
      ? data?.countries?.edges?.filter((country) =>
          country.node.name.toLowerCase().includes(search)
        )
      : data?.countries?.edges;

  
    
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
      {error && <Error error={error} />}
      {data && <CountryList countries={filteredCountries} />}
    </div>
  );
};

export default Home;
