import { useQuery } from "@apollo/client";
import { memo } from "react";

import { Link, useParams } from "react-router-dom";
import { DetailCountryInfo, Loading } from "../components";
import { COUNTRY_INFO } from "../components/schema";

const Detail = () => {
  const countryName = useParams();

  const { data, loading, error } = useQuery(COUNTRY_INFO, {
    variables: { ID: countryName.id },
  });

  return (
    <div className="containe text-base font-light">
      {loading && <Loading />}
      {error && <p>{error.message}</p>}
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
      <div className="mt-14 flex flex-col mobileL:flex-row mobileL:items-center ">
        <img
          className="shadow-xl-custom"
          src={data.country.flag}
          alt={data.country.name}
        />
        <DetailCountryInfo {...data.country} />
      </div>
    </div>
  );
};

export default memo(Detail);
