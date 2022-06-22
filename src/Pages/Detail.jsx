import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";

const COUNTRY_INFO = gql`
  query GET_COUNTRIES($name: String!) {
    countries(name: $name) {
      edges {
        node {
          flag
          name
          nativeName
          population
          region
          subregion
          capital
          topLevelDomain
          borders
          currencies {
            edges {
              node {
                name
              }
            }
          }
          languages {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Detail = () => {
  const countryName = useParams();

  const { data, loading, error } = useQuery(COUNTRY_INFO, {
    variables: { name: countryName.name },
  });

  const country = data?.countries?.edges?.[0]?.node;

  const countryCurrency = country?.currencies?.edges?.[0]?.node;

  const countryLanguage = country?.languages?.edges;

  const countryBorder = country?.borders;

  if (loading) return <Loading />;
  if (error) return <p>Error!</p>;
  if (data)
    return (
      <div className="containe text-base">
        <Link to="/">Back</Link>
        <div className="grid grid-cols-1 place-content-center place-items-center sm:grid-cols-2">
          <div>
            <img
              src={country.flag}
              className={`drop-shadow-xl`}
              alt={country.name}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{country.name}</h1>
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-10">
              <div className="space-y-2">
                <p>Native Name: {country.nativeName}</p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div>
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: {countryCurrency.name}</p>
                <p>
                  Language:{" "}
                  {countryLanguage.map((language) => language.node.name)}
                </p>
              </div>
            </div>
            <div>
              <p>Border: {countryBorder.map((border) => border)}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Detail;
