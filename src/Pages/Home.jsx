import { gql, useQuery } from "@apollo/client";
import { CountryList, Error, Loading, Navbar } from "../components";

const COUNTRIES_INFO = gql`
  {
    countries(first: 14) {
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
    <div className="bg-blue-200">
      <Navbar />
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <CountryList countries={data.countries} />}
    </div>
  );
};

export default Home;
