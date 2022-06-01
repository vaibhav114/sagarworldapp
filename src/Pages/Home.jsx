import { gql, useQuery } from "@apollo/client";
import {
  CountryList,
  Error,
  Filter,
  Loading,
  Navbar,
  Search,
} from "../components";

const COUNTRIES_INFO = gql`
  {
    countries(first: 12) {
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
  const { data, loading, error } = useQuery(COUNTRIES_INFO);

  return (
    <div className="bg-gray-100  dark:bg-blue-200">
      <Navbar />
      <div className="mx-auto my-8 flex w-[90%] flex-col items-center justify-center sm:flex-row sm:justify-between md:w-[85%]">
        <Search />
        <Filter />
      </div>
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <CountryList countries={data.countries} />}
    </div>
  );
};

export default Home;
