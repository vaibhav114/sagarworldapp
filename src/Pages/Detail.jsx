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
        <p className="element-style my-[3rem] w-min py-2 px-8 shadow-lg">
          <Link className="flex items-center justify-center" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-x-[8rem]">
          <img
            src={country.flag}
            className={`object-cover drop-shadow-xl`}
            alt={country.name}
          />
          <div className="my-[4rem]">
            <h1 className="text-3xl font-bold">{country.name}</h1>
            <div className="mt-8 grid grid-cols-2">
              <div className="space-y-2">
                <p>
                  Native Name:{" "}
                  <span className="text-dark-gray">{country.nativeName}</span>
                </p>
                <p>Population: {country.population}</p>
                <p>Region: {country.region}</p>
                <p>Sub Region: {country.subregion}</p>
                <p>Capital: {country.capital}</p>
              </div>
              <div className="space-y-2">
                <p>Top Level Domain: {country.topLevelDomain}</p>
                <p>Currencies: {countryCurrency.name}</p>
                <p>
                  Language:{" "}
                  {countryLanguage.map((language) => language.node.name)}
                </p>
              </div>
            </div>
            <div>
              <p className="mt-20 space-x-2">
                Border Countries:{" "}
                {countryBorder.map((border) => (
                  <span key={border} className="element-style py-1 px-4">
                    {border}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Detail;
