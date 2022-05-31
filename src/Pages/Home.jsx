import { gql, useQuery } from "@apollo/client";
import { CountryList, Error, Navbar } from "../components";

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
    <div>
      <Navbar />
      {loading && <p>Loading...</p>}
      {error && <Error error={error} />}
      {data && <CountryList countries={data.countries} />}
    </div>
  );
};

export default Home;
