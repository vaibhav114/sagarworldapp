import { useQuery } from "@apollo/client";
import { memo } from "react";

import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import { DetailPageProps } from "../utils/Props";
import { COUNTRY_INFO } from "../utils/schema";

const Detail = () => {
  const countryName = useParams();

  const { data, loading, error } = useQuery<DetailPageProps>(COUNTRY_INFO, {
    variables: { ID: countryName.id },
  });

  const countryData = data?.country;

  const countryInfo = [
    {
      id: 1,
      title: "Native Name",
      value: countryData?.nativeName,
    },
    {
      id: 2,
      title: "Population",
      value: countryData?.population.toLocaleString(),
    },
    {
      id: 3,
      title: "Region",
      value: countryData?.region,
    },
    {
      id: 4,
      title: "Sub Region",
      value: countryData?.subregion,
    },
    {
      id: 5,
      title: "Capital",
      value: countryData?.capital,
    },
    {
      id: 6,
      title: "Top Level Domain",
      value: countryData?.topLevelDomain,
    },
    {
      id: 7,
      title: "Currencies",
      value: countryData?.currencies.edges
        .map((currency) => currency.node.name)
        .join(", "),
    },

    {
      id: 8,
      title: "Languages",
      value: countryData?.languages.edges
        .map((language) => language.node.name)
        .join(", "),
    },
  ];

  const borderCountries = countryData?.borders;

  return (
    <div className="container-custom">
      <p className="mt-10 w-min rounded-[2px] py-2 px-6 shadow-xl-custom dark:bg-dark-blue mobileL:mt-[3rem]">
        <Link className="flex flex-row items-center justify-center" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
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
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
      {!loading && (
        <div className="flex flex-col items-center justify-between mobileL:flex-row">
          <img
            alt=""
            className="mobileL:h-[300px] mobileL:mobileL:w-[400px]"
            src={data?.country.flag}
          />
          <div className="">
            <h1 className="text-3xl font-bold">{data?.country.name}</h1>
            <div className="flex flex-col gap-y-10 mobileL:flex-row mobileL:gap-y-0 mobileL:gap-x-24">
              <div className="detail space-y-1">
                {countryInfo.slice(1, 5).map((item) => (
                  <p key={item.id}>
                    {item.title}: <span>{item.value}</span>
                  </p>
                ))}
              </div>
              <div className="detail space-y-1">
                {countryInfo.slice(5, 8).map((item) => (
                  <p key={item.id}>
                    {item.title}: <span>{item.value}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="detail max-w-5xl">
              <p className="flex flex-row flex-wrap space-x-2">
                Border Countries:{" "}
                {borderCountries?.map((border) => (
                  <span key={border} className="element py-1 px-4">
                    {border}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Detail);
