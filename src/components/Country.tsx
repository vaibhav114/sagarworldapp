import { memo } from "react";
import { Link } from "react-router-dom";
import { CountryProps } from "../utils/Props";

const Country = ({
  id,
  name,
  population,
  region,
  capital,
  flag,
}: CountryProps) => {
  const CountryArray = [
    { title: "Population", value: population.toLocaleString("en-US") },
    { title: "Region", value: region },
    { title: "Capital", value: capital },
  ];

  return (
    <div className="element h-[350px] hover:-translate-y-2 duration-150 transition-all ease-in-out w-[265px] overflow-hidden rounded-md">
      <div className="h-1/2">
        <Link to={`/${name}/${id}`}>
          <img
            className="h-full w-full object-cover"
            loading="lazy"
            src={flag}
            alt="Country Flag"
          />
        </Link>
      </div>
      <div className="detail px-5">
        <h2 className="my-4 text-lg font-bold">{name}</h2>
        {CountryArray.map((item, index) => (
          <p key={index}>
            {item.title}: <span>{item.value}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default memo(Country);
